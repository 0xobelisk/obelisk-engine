package config

var (
	DEFAULT_SYNC_INTERVAL        = 1
	DEFAULT_SYNC_NUM      uint64 = 10
)

type Config struct {
	HttpRpcUrl   string `yaml:"http_rpc_url"`
	SyncInterval int    `yaml:"sync_interval"`
	SyncNum      uint64 `yaml:"sync_num"`
	SyncCursorTx string `yaml:"sync_cursor_tx"`
	Package      string `yaml:"package"`
	Module       string `yaml:"module"`
	DbPath       string `yaml:"db_path"`
}

// parse from command-line flags.
func InitFromFlags(httpRpc string, syncCursorTx string, pacakgeId string, module string, dbPath string) (*Config, error) {
	config := &Config{
		HttpRpcUrl:   httpRpc,
		SyncCursorTx: syncCursorTx,
		Package:      pacakgeId,
		Module:       module,
		DbPath:       dbPath,
	}

	if config.SyncInterval == 0 {
		config.SyncInterval = DEFAULT_SYNC_INTERVAL
	}

	if config.SyncNum == 0 {
		config.SyncNum = DEFAULT_SYNC_NUM
	}

	return config, nil
}
