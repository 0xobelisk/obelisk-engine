# Indexer
Indexer is an automatic indexer tool for obelisk worlds. 

## Quickstart 
### Run from source 
1. Install Go 
2. Compile file 
```bash
go build -o indexer cmd/main.go 
```
3. Run 
```
./indexer --http-rpc-url=<SuiRpcUrl> --package=<PackageId> --modules=<Module> --db-path=<DBPath>
```
