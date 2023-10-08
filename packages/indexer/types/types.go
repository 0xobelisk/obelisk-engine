package types

import "strings"

type EventType string

const (
	// EVENT_COMP_REGISTER     EventType = "CompRegister"
	// EVENT_COMP_ADD_FIELD    EventType = "CompAddField"
	// EVENT_COMP_UPDATE_FIELD EventType = "CompUpdateField"
	EVENT_COMP_SET_FIELD    EventType = "CompSetField"
	EVENT_COMP_REMOVE_FIELD EventType = "CompRemoveField"
	EVENT_UNKNOW            EventType = ""
)

var EventTypes = []EventType{EVENT_COMP_SET_FIELD, EVENT_COMP_REMOVE_FIELD, EVENT_COMP_REMOVE_FIELD}

func MatchEventType(event string) EventType {
	for _, t := range EventTypes {
		if strings.Contains(event, string(t)) {
			return t
		}

	}
	return EVENT_UNKNOW
}
