package main

import (
	"context"
	"flag"
	"os"
	"os/signal"
	"syscall"

	"github.com/0xobelisk/obelisk-engine/package/sui-indexer/client"
	"github.com/0xobelisk/obelisk-engine/package/sui-indexer/config"
	"github.com/0xobelisk/obelisk-engine/package/sui-indexer/db"
	"github.com/0xobelisk/obelisk-engine/package/sui-indexer/logger"
	"github.com/0xobelisk/obelisk-engine/package/sui-indexer/parser"
	"github.com/0xobelisk/obelisk-engine/package/sui-indexer/query"
	"github.com/0xobelisk/obelisk-engine/package/sui-indexer/sync"
	"github.com/0xobelisk/obelisk-engine/package/sui-indexer/types"

	"go.uber.org/zap"
)

var (
	Conf = flag.String("conf", "./indexer.yaml", "config path")

	HttpRpcUrl   = flag.String("http-rpc-url", "", "sui http rpc")
	Package      = flag.String("package", "", "sui package")
	Modules      = flag.String("modules", "world", "sui module")
	SyncCursorTx = flag.String("sync-cursor-tx", "", "sync begin cursor tx")
	DbPath       = flag.String("db-path", "./suidb", "db path")
)

func main() {
	flag.Parse()
	logger.InitLogger()

	var cfg *config.Config
	var err error
	if Conf != nil {
		cfg, err = config.InitFromFile(*Conf)
		if err != nil {
			logger.GetLogger().Error("init from file err: ", zap.Error(err))
			return
		}
	} else {
		cfg, err = config.InitFromFlags(*HttpRpcUrl, *SyncCursorTx, *Package, *Modules, *DbPath)
		if err != nil {
			logger.GetLogger().Error("init from flags  err: ", zap.Error(err))
			return
		}
	}

	logger.GetLogger().Debug(" config content: ", zap.Any("cfg", cfg))

	cli, err := client.NewClient(cfg.HttpRpcUrl)
	if err != nil {
		logger.GetLogger().Error("new client err: ", zap.Error(err))
		return
	}

	// db init
	db, err := db.NewDB(cfg.Db.Path, cfg.Db.LoggerOn)
	if err != nil {
		logger.GetLogger().Error("db init err: ", zap.Error(err))
		return
	}

	// sync init
	eventChan := make(chan *types.SuiEvent, 1000)
	s := sync.NewSync(cfg, cli, db, eventChan)
	errChn := make(chan error)
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	go s.Start(ctx, errChn)

	// parser init
	p := parser.NewParser(cfg, eventChan, db)
	go p.Start()

	// query init
	q := query.NewQueryServer(db)
	go q.Start()

	// signal
	sysErr := make(chan os.Signal, 1)
	signal.Notify(sysErr,
		syscall.SIGTERM,
		syscall.SIGINT,
		syscall.SIGHUP,
		syscall.SIGQUIT)

	select {
	case err := <-errChn:
		logger.GetLogger().Error("failed to listen and serve  ", zap.Error(err))
	case sig := <-sysErr:
		logger.GetLogger().Error("terminating got signal", zap.Any("signal", sig))
	}
}
