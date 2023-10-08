package parser

import (
	"encoding/json"
	"errors"
	"strconv"

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
	for event := range p.eventChan { // 没有事件时，eventchannel会阻塞
		logger.GetLogger().Debug("paser recv events ", zap.Any("event", event))
		err := p.parseEvent(event)
		if err != nil {
			logger.GetLogger().Error("paser parse event fail", zap.Error(err))
		}
	}
}

func (p *Parser) parseEvent(ev *types.SuiEvent) error {
	//Todo: id的定义
	typ := types.MatchEventType(ev.Type)
	if typ == types.EVENT_UNKNOW {
		return nil
	}

	e := &models.Event{
		PackageId: ev.PackageId,
	}

	compName, ok := ev.ParsedJson["comp"].(string)
	if !ok {
		logger.GetLogger().Error("parse json comp_id fail")
		return ParseEventErr
	}
	e.CompName = compName

	entityKey, ok := ev.ParsedJson["key"].(string)
	if !ok {
		logger.GetLogger().Error("parse json key fail")
		return ParseEventErr
	}
	e.EntityKey = entityKey

	TimestampMs, err := strconv.ParseUint(ev.TimestampMs, 10, 64)
	if err != nil {
		logger.GetLogger().Error("parse timestamp_ms fail")
		return ParseEventErr
	}
	e.TimestampMs = TimestampMs

	switch typ {
	case types.EVENT_COMP_SET_FIELD:
		return p.parseSetEvent(e, ev)

	case types.EVENT_COMP_REMOVE_FIELD:
		return p.parseRemoveEvent(e)
	}

	return nil
}

func (p *Parser) parseSetEvent(e *models.Event, ev *types.SuiEvent) error {
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

	return p.db.UpsertCompEntity(e)

}

func (p *Parser) parseRemoveEvent(e *models.Event) error {
	return p.db.DeleteCompEntity(e)
}
