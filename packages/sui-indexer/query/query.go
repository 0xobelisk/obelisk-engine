package query

import (
	"encoding/json"
	"net/http"

	"github.com/0xobelisk/obelisk-engine/package/indexer/logger"
	"github.com/0xobelisk/obelisk-engine/package/indexer/models"
	"github.com/0xobelisk/obelisk-engine/package/indexer/types"

	"github.com/gin-gonic/gin"
	"go.uber.org/zap"
)

type QueryServer struct {
	httpServer *gin.Engine
	db         models.Datastore
}

func NewQueryServer(db models.Datastore) *QueryServer {
	q := &QueryServer{
		httpServer: gin.Default(),
		db:         db,
	}

	return q

}

func (q *QueryServer) Start() {
	q.initRouter()
	logger.GetLogger().Info("Query http server start at ", zap.Uint("port", 8080))
	q.httpServer.Run(":8080")
}

func (q *QueryServer) initRouter() {
	q.httpServer.GET("/get_schema_entities", q.GetComps)
}

func (q *QueryServer) GetComps(c *gin.Context) {
	packageId := c.Query("package_id")
	schemaName := c.Query("schema_name")
	entityKey := c.Query("entity_key")

	if packageId == "" || schemaName == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "missing required parameters"})
		return
	}
	data, err := q.getCompsFromDB(packageId, schemaName, entityKey)
	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		return
	}

	c.JSON(200, gin.H{"data": data})
}

func (q *QueryServer) getCompsFromDB(packageId string, schemaName string, entityKey string) ([]types.CompData, error) {
	events, err := q.db.QueryCompEntities(packageId, schemaName, entityKey)
	if err != nil {
		return nil, err
	}

	var comps []types.CompData
	for _, event := range events {
		comp := types.CompData{
			SchemaName:  event.SchemaName,
			PackageId:   event.PackageId,
			EntityKey:   event.EntityKey,
			TimestampMs: event.TimestampMs,
		}
		var data map[string]interface{}
		err := json.Unmarshal([]byte(event.Data), &data)
		if err != nil {
			return nil, err
		}
		comp.Data = data
		comps = append(comps, comp)
	}

	return comps, nil
}
