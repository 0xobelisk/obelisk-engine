# Indexer
Indexer is an automatic indexer tool for obelisk worlds. 

## 🚀 Quick Start
### Prerequisites 
Before we begin let’s make sure your local environment is setup with the proper prerequisites.

#### Golang Environment 
Indexer is written in the Go programming language. To use Ignite CLI on a local system:
- golang (v1.20+) ([download](https://go.dev/doc/install))
- Ensure the Go environment variables are [set properly](https://golang.org/doc/gopath_code#GOPATH) on your system

### Setup
### 1. Install Binary
```bash
go install github.com/0xobelisk/obelisk-engine/package/sui-indexer@latest
```

### 2. Copy indexer.yaml.example to indexer.yaml
```
http_rpc_url: https://fullnode.devnet.sui.io:443
sync: 
  sync_num: 50
  packages:
    - package: 0x503cecf490a25c8fdc8c0f795fa9efa6459bb1a61003f2a24c62cdddefcecc1c
      module_infos: 
        - module: events
          cursor_tx: 
          seq_no: 
db:
  path: ./suidb
  logger_on: on
```
- http_rpc_url: The URL for an SUI HTTP RPC. It specifies the endpoint for making remote procedure calls (RPC) over HTTP.
- sync: Configuration related to synchronization.
    - sync_num: The number of synchronization processes to run concurrently. It determines the level of parallelism for syncing.
    - packages: A list of packages to sync.
        - package: The identifier of a specific sui package to sync. 
        - module_infos: Information about the modules within the package.
            - module: The name or identifier of a specific sui module within the package.
            - cursor_tx: A cursor transaction for tracking the progress of syncing. It may refer to a specific point in time or a specific transaction.
            - seq_no: The sequence number associated with the module. It could be used to order or identify the module within the package.
- db: Configuration related to the database.
    - path: The path to the sqlite database. It specifies the location where the database files are stored.
    - logger_on: Indicates whether the db logger is turned on or off. It determines if logging functionality is enabled.

### 3. Run indexer
```
./indexer --conf=<path to config file>
```

#### 4. Indexer Http Method
##### get_schema_entities
###### description
get entities schema
###### request:
```
GET get_schema_entities?package_id=<package id>&schema_name=<schema name>
```
package_id: sui package id 
schema_name: sui schema name

- example: 
```
http://127.0.0.1:8080/get_schema_entities?package_id=0x503cecf490a25c8fdc8c0f795fa9efa6459bb1a61003f2a24c62cdddefcecc1c&schema_name=0x706f736974696f6e
```


###### response:

name |	type |	must |	description
:----: | :----: |:----: |:----:
package_id |	string | false |	sui package id
schema_id |	string | false |	schema id 
entity_key |	string | false |	entity key
schema_type |	string | false |	schema type
data |	object | false |	schema data
timestamp_ms |	string | false |	millisecond timestamp





