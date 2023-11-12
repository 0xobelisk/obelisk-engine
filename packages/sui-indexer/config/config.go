package config

import (
	"fmt"
	"os"

	"gopkg.in/yaml.v3"
)

var (
	DEFAULT_SYNC_INTERVAL uint   = 1
	DEFAULT_SYNC_NUM      uint64 = 10
)

type ModuleInfo struct {
	Module   string `yaml:"module"`
	CursorTx string `yaml:"sync_cursor_tx"`
	EventSeq string `yaml:"seq_no"`
}

type PackageInfo struct {
	Package     string       `yaml:"package"`
	ModuleInfos []ModuleInfo `yaml:"module_infos"`
}

type SyncConfig struct {
	SyncNum  uint64        `yaml:"sync_num"`
	Packages []PackageInfo `yaml:"packages"`
}

type DbConfig struct {
	Path     string `yaml:"path"`
	LoggerOn bool   `yaml:"logger_on"`
}

type Config struct {
	HttpRpcUrl   string     `yaml:"http_rpc_url"`
	SyncInterval uint       `yaml:"sync_interval"`
	Sync         SyncConfig `yaml:"sync"`
	Db           DbConfig   `yaml:"db"`
}

// parse from command-line flags.
func InitFromFlags(httpRpc string, CursorTx string, pacakgeId string, module string, dbPath string) (*Config, error) {
	config := &Config{
		HttpRpcUrl: httpRpc,
		Db: DbConfig{
			Path: dbPath,
		},
	}

	moduleInfo := ModuleInfo{
		Module:   module,
		CursorTx: CursorTx,
		EventSeq: "0",
	}

	packageInfo := PackageInfo{
		Package: pacakgeId,
		ModuleInfos: []ModuleInfo{
			moduleInfo,
		},
	}

	config.Sync = SyncConfig{
		SyncNum:  DEFAULT_SYNC_NUM,
		Packages: []PackageInfo{packageInfo},
	}

	if config.SyncInterval == 0 {
		config.SyncInterval = DEFAULT_SYNC_INTERVAL
	}

	return config, nil
}

// parse from file.
func InitFromFile(configFile string) (*Config, error) {
	config := &Config{}
	data, err := os.ReadFile(configFile)
	if err != nil {
		return nil, fmt.Errorf("could not read config file: %w", err)
	}

	err = yaml.Unmarshal(data, config)
	if err != nil {
		return nil, fmt.Errorf("could not parse config file: %w", err)
	}

	if config.SyncInterval == 0 {
		config.SyncInterval = DEFAULT_SYNC_INTERVAL
	}

	return config, nil
}
