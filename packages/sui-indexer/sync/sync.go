package sync

import (
	"context"
	"time"

	"github.com/0xobelisk/obelisk-engine/packages/sui-indexer/client"
	"github.com/0xobelisk/obelisk-engine/packages/sui-indexer/config"
	"github.com/0xobelisk/obelisk-engine/packages/sui-indexer/db"
	"github.com/0xobelisk/obelisk-engine/packages/sui-indexer/logger"
	"github.com/0xobelisk/obelisk-engine/packages/sui-indexer/types"
	"go.uber.org/zap"
)

const SLEEP_TIME = 2

type Sync struct {
	config    *config.Config
	client    *client.Client
	db        *db.DB
	eventChan chan<- *types.SuiEvent
}

func NewSync(config *config.Config, client *client.Client, db *db.DB, eventChan chan<- *types.SuiEvent) *Sync {
	return &Sync{
		config:    config,
		client:    client,
		db:        db,
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
	// Todo: if db have cursor record; use db record; else use config info
	cursorTx, cursorEventSeq := s.retriveCursor(packageId, m.Module, m)
	logger.GetLogger().Info("syncOneModule packageId ", zap.String("package", packageId),
		zap.String("module", m.Module))

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

// if db have cursor record; use db record; else use config info
func (s *Sync) retriveCursor(packageId string, module string, m *config.ModuleInfo) (string, string) {
	cursorTx, cursorEventSeq, err := s.db.GetCursor(packageId, module)
	if err == nil {
		return cursorTx, cursorEventSeq
	} else {
		if err != nil && err != types.ErrDbNotFound {
			logger.GetLogger().Error("get cursor error", zap.Error(err))
			return "", ""
		}
	}

	if cursorTx == "" || cursorEventSeq == "" {
		cursorTx = m.CursorTx
		cursorEventSeq = m.EventSeq
	}

	return cursorTx, cursorEventSeq
}
