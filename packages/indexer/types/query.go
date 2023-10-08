package types

type CompData struct {
	PackageId   string      `json:"package_id"`
	CompName    string      `json:"comp_name"`
	EntityKey   string      `json:"entity_key"`
	Data        interface{} `json:"data"`
	TimestampMs uint64      `json:"timestamp_ms"`
}
