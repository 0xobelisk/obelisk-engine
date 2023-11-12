package types

type CompData struct {
	PackageId   string      `json:"package_id"`
	SchemaId    string      `json:"schema_id"`
	EntityKey   string      `json:"entity_key"`
	SchemaType  uint        `json:"schema_type"`
	Data        interface{} `json:"data"`
	TimestampMs uint64      `json:"timestamp_ms"`
}
