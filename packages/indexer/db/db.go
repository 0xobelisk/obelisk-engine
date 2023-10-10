package db

import (
	"errors"
	"log"
	"os"
	"time"

	"github.com/0xobelisk/obelisk-engine/package/indexer/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type DB struct {
	*gorm.DB
}

func NewDB(Path string) (*DB, error) {
	connection, err := gorm.Open(sqlite.Open(Path), &gorm.Config{
		Logger: logger.New(
			log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
			logger.Config{
				SlowThreshold: time.Second, // 慢 SQL 阈值
				LogLevel:      logger.Info, // 日志级别
				Colorful:      true,        // 禁用彩色打印
			},
		),
	})

	if err != nil {
		return nil, err
	}

	// atuo migrate
	err = connection.AutoMigrate(&models.Event{})
	if err != nil {
		return nil, err
	}

	db := &DB{
		connection,
	}
	// db.Debug()

	return db, nil
}

// insert or update event
func (db *DB) UpsertCompEntity(event *models.Event) error {
	var existingEvent models.Event
	err := db.Where("package_id = ? AND schema_name = ? AND entity_key = ?", event.PackageId, event.SchemaName, event.EntityKey).First(&existingEvent).Error

	if err == nil {
		existingEvent.TimestampMs = event.TimestampMs
		existingEvent.Data = event.Data
		return db.Save(&existingEvent).Error
	} else if err == gorm.ErrRecordNotFound {
		return db.Create(event).Error
	} else {
		return err
	}
}

func (db *DB) DeleteCompEntity(event *models.Event) error {
	if err := db.Where("package_id = ? AND schema_name = ? AND entity_key = ?", event.PackageId, event.SchemaName, event.EntityKey).First(event).Error; err != nil {
		return errors.New("event not found")
	}
	return db.Delete(event).Error
}

func (db *DB) QueryCompEntities(packageId string, schemaName string, entityKey string) ([]models.Event, error) {
	var events []models.Event

	var err error
	if entityKey != "" {
		err = db.Where("package_id = ? AND schema_name = ? AND entity_key = ?",
			packageId, schemaName, entityKey).Find(&events).Error
	} else {
		err = db.Where("package_id = ? AND schema_name = ? ", packageId, schemaName).Find(&events).Error
	}

	if err != nil {
		return nil, err
	} else {
		return events, nil
	}

}
