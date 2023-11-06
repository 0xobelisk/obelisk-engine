package types

import "strings"

type EventType string

const (
	EVENT_SCHEMA_SET_FIELD           EventType = "SchemaSetField"
	EVENT_SCHEMA_REMOVE_FIELD        EventType = "SchemaRemoveField"
	EVENT_SCHEMA_SET_EPHEMERAL_FIELD EventType = "SchemaSetEphemeralRecord"
	EVENT_UNKNOW                     EventType = ""
)

var EventTypes = []EventType{EVENT_SCHEMA_SET_FIELD, EVENT_SCHEMA_REMOVE_FIELD, EVENT_SCHEMA_SET_EPHEMERAL_FIELD}

func MatchEventType(event string) EventType {
	for _, t := range EventTypes {
		if strings.Contains(event, string(t)) {
			return t
		}

	}
	return EVENT_UNKNOW
}
