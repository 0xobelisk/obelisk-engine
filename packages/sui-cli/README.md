## The Obelisk CLI

The Obelisk CLI is used for building and developing a Obelisk project.

It comes with


1. `schemagen <configPath>`: Autogenerate Obelisk schemas based on the store schemas config file
2. `publish`: Deploy your own world project on the specified sui network.
3. `upgrade`: Upgrade your own world project on the specified sui network.
4. `localnode`: Start a local Sui node for development
5. `faucet`: An interface to the Devnet/Localnet faucet. It makes it easy to fund addresses on the Devnet/localnet

## Installation

We don’t recommend installing the CLI globally.

Instead, you should add the CLI as a dev dependency to your project (done automatically if you start from a starter kit using `pnpm create obelisk-world`), and use it with `pnpm build` inside your project directory.

## Using the CLI

Some commands expect a Obelisk config in the same folder where the CLI is being executed. This includes `schemagen` and `publish`.

`faucet`, and `localnode` can be executed anywhere.

## Commands

### `schemagen`

Generates Store libraries from a `obelisk.config.ts` file. See the [Store Config and `schemagen` documentation](../schemas/config) in the Store section for more details.

```bash
# in a folder with a obelisk.config.ts
obelisk schemagen obelisk.config.ts
```

### `publish`

Deploy a Obelisk contract project with the World framework.

This tool will use the `obelisk.config.ts` to detect all systems, schemas and projectName in the World and will deploy them to the chain specified.

When using the deployer, you must set the private key of the deployer using the `PRIVATE_KEY` environment variable. You can make this easier by using [`dotenv`](https://www.npmjs.com/package/dotenv) before running `obelisk publish` in your deployment script.

To set up the target network for deploying the contract (mainnet/testnet/devnet/localnet), before deploying the contract, please make sure that you have some tokens in your account, which will be used for some fees when deploying the contract. (If you choose devnet/localnet, you can get some test tokens via `obelisk faucet`), if you need to deploy the contract on localnet, please make sure you have started localnode.

```bash
# to deploy sui locally
obelisk publish --network localnet
# to deploy to sui devnet
obelisk publish --network devnet
# to deploy to sui testnet
obelisk publish --network testnet
# to deploy to sui mainnet
obelisk publish --network mainnet
```


### `upgrade`

Upgrade Obelisk contract project.

When you add a new schema or modify the system code, you need to upgrade the contract through the `upgrade` method. ([Contract upgrade specification](../migrating-from-others))

```bash
obelisk upgrade --network <network:mainnet/testnet/devnet/localnet>
```

### `localnode`

The localnode uses the official `sui-test-validator` binary provided by sui to start the localnode.

The local rpc is `http://127.0.0.1:9000`

```bash
obelisk localnode
```

### `faucet`

Connects to a Obelisk faucet service to fund an address.

```bash
obelisk faucet --network <network:devnet/localnet>
obelisk faucet --network <network:devnet/localnet> --recipient <address>
```

The default faucet service automatically gives test tokens to accounts in [`dotenv`](https://www.npmjs.com/package/dotenv).

To fund an address on the devnet/localnet, run `obelisk faucet --recipient <address>`
