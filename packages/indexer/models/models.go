package models

import (
	"gorm.io/gorm"
)

type Datastore interface {
	UpsertCompEntity(event *Event) error
	DeleteCompEntity(event *Event) error
	QueryCompEntities(packageId string, compName string, entityKey string) ([]Event, error)
	UpsertCursor(cursor *Cursor) error
}

type Event struct {
	gorm.Model
	PackageId   string `gorm:"index:idx_unique_event"`
	SchemaName  string `gorm:"index:idx_unique_event"`
	EntityKey   string `gorm:"index:idx_unique_event"`
	IsEphemeral bool
	Data        string
	TimestampMs uint64
}

type Cursor struct {
	gorm.Model
	PackageId   string `gorm:"index:idx_cursor"`
	Module      string `gorm:"index:idx_cursor"`
	CursorTx    string
	EventSeq    string
	TimestampMs uint64
}
