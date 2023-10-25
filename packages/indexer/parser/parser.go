package parser

import (
	"encoding/json"
	"errors"
	"strconv"
	"strings"

	"github.com/0xobelisk/obelisk-engine/package/indexer/config"
	"github.com/0xobelisk/obelisk-engine/package/indexer/logger"
	"github.com/0xobelisk/obelisk-engine/package/indexer/models"
	"github.com/0xobelisk/obelisk-engine/package/indexer/types"

	"go.uber.org/zap"
)

var ParseEventErr = errors.New("paser evnt filed fail")

type Parser struct {
	config    *config.Config
	eventChan <-chan *types.SuiEvent
	db        models.Datastore
}

func NewParser(config *config.Config, eventChan <-chan *types.SuiEvent, db models.Datastore) *Parser {
	return &Parser{
		config:    config,
		eventChan: eventChan,
		db:        db,
	}
}

func (p *Parser) Start() {
	for event := range p.eventChan { // wait event
		logger.GetLogger().Debug("paser recv events ", zap.Any("event", event))
		err := p.parseEvent(event)
		if err != nil {
			logger.GetLogger().Error("paser parse event fail", zap.Error(err))
		}
	}
}

func (p *Parser) parseEvent(ev *types.SuiEvent) error {
	typ := types.MatchEventType(ev.Type)
	if typ == types.EVENT_UNKNOW {
		return nil
	}

	e := &models.Event{
		PackageId: ev.PackageId,
	}

	schemaName, ok := ev.ParsedJson["_obelisk_schema_name"].(string)
	if !ok {
		logger.GetLogger().Error("parse json schema_name fail")
		return ParseEventErr
	}
	e.SchemaName = schemaName

	entityKey, ok := ev.ParsedJson["_obelisk_entity_key"].(string)
	if !ok {
		logger.GetLogger().Error("parse json entity_key fail")
		return ParseEventErr
	}
	e.EntityKey = entityKey

	timestampMs, err := strconv.ParseUint(ev.TimestampMs, 10, 64)
	if err != nil {
		logger.GetLogger().Error("parse timestamp_ms fail")
		return ParseEventErr
	}
	e.TimestampMs = timestampMs

	switch typ {
	case types.EVENT_SCHEMA_SET_FIELD, types.EVENT_SCHEMA_SET_EPHEMERAL_FIELD:
		err = p.parseSetOrEphemeralEvent(typ, e, ev)
	case types.EVENT_SCHEMA_REMOVE_FIELD:
		err = p.parseRemoveEvent(e)
	}

	// update cursor
	if err == nil {
		p.recordCursor(ev, timestampMs)
	}

	return err
}

func (p *Parser) parseSetOrEphemeralEvent(typ types.EventType, e *models.Event, ev *types.SuiEvent) error {
	data, ok := ev.ParsedJson["data"]
	if !ok {
		logger.GetLogger().Error("parse json data fail")
		return ParseEventErr
	}
	d, err := json.Marshal(data)
	if err != nil {
		logger.GetLogger().Error("marshal json data fail")
		return ParseEventErr
	}
	e.Data = string(d)

	if typ == types.EVENT_SCHEMA_SET_EPHEMERAL_FIELD {
		e.IsEphemeral = true
	}

	return p.db.UpsertCompEntity(e)

}

func (p *Parser) parseRemoveEvent(e *models.Event) error {
	return p.db.DeleteCompEntity(e)
}

func (p *Parser) recordCursor(ev *types.SuiEvent, timestampMs uint64) error {
	cursor := &models.Cursor{}
	cursor.PackageId = ev.PackageId
	cursor.CursorTx = ev.TxDigest
	cursor.EventSeq = ev.EventSeq
	cursor.TimestampMs = timestampMs

	s := strings.Split(ev.Type, "::")
	if len(s) != 5 {
		return errors.New("invalid event type")
	}
	cursor.Module = s[1]
	return p.db.UpsertCursor(cursor)
}

