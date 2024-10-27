import { ObeliskConfig } from '../../types';
import { formatAndWriteMove } from '../formatAndWrite';

export async function generateToml(config: ObeliskConfig, srcPrefix: string) {
	let code = `[package]
name = "${config.name}"
version = "0.0.1"
edition = "2024.beta"

[dependencies]
Sui = { git = "https://github.com/MystenLabs/sui.git", subdir = "crates/sui-framework/packages/sui-framework", rev = "mainnet-v1.31.1" }
Obelisk = { git = "https://github.com/0xobelisk/obelisk-engine.git", subdir = "packages/obelisk-framework", rev = "main" }

[addresses]
sui =  "0x2"
obelisk =  "0x3dc2d6239eed38c9798444afbf4bada0998ec98edc365713864405fe64203256"
${config.name} = "0x0"
`;
	await formatAndWriteMove(
		code,
		`${srcPrefix}/contracts/${config.name}/Move.toml`,
		'formatAndWriteMove'
	);
}
