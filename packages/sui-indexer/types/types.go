package types

import "strings"

type EventType string

// type SchemaType uint

const (
	EVENT_SCHEMA_SET_FIELD    EventType = "SchemaSetRecord"
	EVENT_SCHEMA_REMOVE_FIELD EventType = "SchemaRemoveRecord"
	EVENT_UNKNOW              EventType = ""
)

const (
	SCHEMA_TYPE_NORMAL    uint = 0
	SCHEMA_TYPE_SINGLE    uint = 1
	SCHEMA_TYPE_EPHEMERAL uint = 2
)

var EventTypes = []EventType{EVENT_SCHEMA_SET_FIELD, EVENT_SCHEMA_REMOVE_FIELD}

func MatchEventType(event string) EventType {
	for _, t := range EventTypes {
		if strings.Contains(event, string(t)) {
			return t
		}

	}
	return EVENT_UNKNOW
}
