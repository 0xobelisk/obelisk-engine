package models

import (
	"gorm.io/gorm"
)

type Datastore interface {
	UpsertCompEntity(event *Event) error
	DeleteCompEntity(event *Event) error
	QueryCompEntities(packageId string, compName string, entityKey string) ([]Event, error)
}

type Event struct {
	gorm.Model
	PackageId   string `gorm:"index:idx_unique_event"`
	SchemaName  string `gorm:"index:idx_unique_event"`
	EntityKey   string `gorm:"index:idx_unique_event"`
	Data        string
	TimestampMs uint64
}
