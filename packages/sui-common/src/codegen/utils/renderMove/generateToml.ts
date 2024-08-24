import { ObeliskConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';

export function generateToml(config: ObeliskConfig, srcPrefix: string) {
	let code = `[package]
name = "${config.name}"
version = "0.0.1"
edition = "2024.beta"

[dependencies]
Sui = { git = "https://github.com/MystenLabs/sui.git", subdir = "crates/sui-framework/packages/sui-framework", rev = "mainnet-v1.31.1" }
# Obelisk = { git = "https://github.com/0xobelisk/obelisk-engine.git", subdir = "packages/obelisk-framework", rev = "mainnet-v1.31.1" }
Obelisk = { local = "/Volumes/project/obelisk-engine/packages/obelisk-framework" }

[addresses]
sui =  "0x2"
obelisk =  "0x6c93abd6e076235f51c6dd95b4adf9b0d4f5b6f6766c6a7b6653101a78a04d8c"
${config.name} = "0x0"
`;
	formatAndWriteMove(
		code,
		`${srcPrefix}/contracts/${config.name}/Move.toml`,
		'formatAndWriteMove'
	);
}
