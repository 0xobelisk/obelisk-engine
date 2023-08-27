import { CommandModule } from "yargs";

import devnode from "./devnode";
import faucet from "./faucet";
import hello from "./hello";
import tablegen from "./compgen";
// import publish from "./publish";
import test from "./test";
import trace from "./trace";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Each command has different options
export const commands: CommandModule<any, any>[] = [
  // publish,
  devnode,
  faucet,
  hello,
  tablegen,
  test,
  trace,
];
