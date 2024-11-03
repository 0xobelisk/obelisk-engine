package db

import (
	"errors"
	"log"
	"os"
	"time"

	"github.com/0xobelisk/dubhe/packages/sui-indexer/models"
	"github.com/0xobelisk/dubhe/packages/sui-indexer/types"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

type DB struct {
	*gorm.DB
}

func NewDB(Path string, loggerOn bool) (*DB, error) {
	gormCfg := &gorm.Config{}
	if loggerOn {
		gormCfg.Logger = logger.New(
			log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
			logger.Config{
				SlowThreshold: time.Second,
				LogLevel:      logger.Info,
				Colorful:      true,
			},
		)
	} else {
		gormCfg.Logger = logger.New(
			log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
			logger.Config{
				IgnoreRecordNotFoundError: true,
				LogLevel:                  logger.Silent,
			},
		)
	}

	connection, err := gorm.Open(sqlite.Open(Path), gormCfg)

	if err != nil {
		return nil, err
	}

	// atuo migrate
	err = connection.AutoMigrate(&models.Event{}, &models.Cursor{})
	if err != nil {
		return nil, err
	}

	db := &DB{
		connection,
	}
	// db.Debug()

	return db, nil
}

// insert or update entity
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

func (db *DB) GetCursor(pacakgeId string, module string) (string, string, error) {
	var cursor models.Cursor
	if err := db.Where("package_id = ? AND module = ? ", pacakgeId, module).First(&cursor).Error; err != nil {
		if err == gorm.ErrRecordNotFound {
			return "", "", types.ErrDbNotFound
		}
		return "", "", err
	}

	return cursor.CursorTx, cursor.EventSeq, nil
}

// insert or update cursor
func (db *DB) UpsertCursor(cursor *models.Cursor) error {
	existingCursor := models.Cursor{}
	err := db.Where("package_id = ? AND module = ? ", cursor.PackageId, cursor.Module).First(&existingCursor).Error

	if err == nil {
		return db.Save(existingCursor).Error
	} else if err == gorm.ErrRecordNotFound {
		return db.Create(cursor).Error
	}

	return nil
}
