package sync

import (
	"context"
	"time"

	"github.com/0xobelisk/obelisk-engine/package/indexer/client"
	"github.com/0xobelisk/obelisk-engine/package/indexer/config"
	"github.com/0xobelisk/obelisk-engine/package/indexer/logger"
	"github.com/0xobelisk/obelisk-engine/package/indexer/types"
	"go.uber.org/zap"
)

const SLEEP_TIME = 2

type Sync struct {
	config    *config.Config
	client    *client.Client
	eventChan chan<- *types.SuiEvent
}

func NewSync(config *config.Config, client *client.Client, eventChan chan<- *types.SuiEvent) *Sync {
	return &Sync{
		config:    config,
		client:    client,
		eventChan: eventChan,
	}
}

func (s *Sync) Start(ctx context.Context, sysErr chan error) {
	go func() {
		timer := time.NewTimer(time.Duration(s.config.SyncInterval) * time.Second)
		for {
			select {
			case <-timer.C:
				s.Poll()
				// timer.Reset(time.Duration(s.config.SyncInterval) * time.Second)
			}
		}
	}()
}

func (s *Sync) Poll() {
	logger.GetLogger().Info("Start Sync")

	for _, packageInfo := range s.config.Sync.Packages {
		go s.syncOnePackage(&packageInfo)
	}
}

func (s *Sync) syncOnePackage(p *config.PackageInfo) {
	logger.GetLogger().Info("sync package", zap.String("package", p.Package))

	for _, m := range p.ModuleInfos {
		go s.syncOneModule(p.Package, &m)
	}
}

func (s *Sync) syncOneModule(packageId string, m *config.ModuleInfo) {
	cursorTx := m.CursorTx
	cursorEventSeq := m.EventSeq

	for {
		ctx := context.Background()
		resp, err := s.client.QueryCompEntities(ctx, packageId, m.Module, cursorTx, cursorEventSeq,
			s.config.Sync.SyncNum, false)

		if err != nil {
			logger.GetLogger().Error("QueryCompEntities failed error: ", zap.Error(err))
			return
		}

		if len(resp.Data) > 0 {
			logger.GetLogger().Debug("sync events length ", zap.Any("length", len(resp.Data)))
			logger.GetLogger().Debug("sync events data ", zap.Any("data", resp.Data))

			for _, v := range resp.Data {
				event := &types.SuiEvent{
					TxDigest:          v.Id.TxDigest,
					EventSeq:          v.Id.EventSeq,
					PackageId:         v.PackageId,
					TransactionModule: v.TransactionModule,
					Sender:            v.Sender,
					Type:              v.Type,
					ParsedJson:        v.ParsedJson,
					Bcs:               v.Bcs,
					TimestampMs:       v.TimestampMs,
				}
				s.eventChan <- event
			}
		}

		if resp.NextCursor.TxDigest != "" {
			cursorTx = resp.NextCursor.TxDigest
			cursorEventSeq = resp.NextCursor.EventSeq
		}

		if resp.HasNextPage {
			continue
		}

		// Todo: add back off algorithm
		time.Sleep(SLEEP_TIME * time.Second)
	}
}
