import { CommandModule } from "yargs";

import localnode from "./localnode";
import faucet from "./faucet";
import hello from "./hello";
import compgen from "./compgen";
import publish from "./publish";
import upgrade from "./upgrade";
import test from "./test";
import trace from "./trace";

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- Each command has different options
export const commands: CommandModule<any, any>[] = [
  publish,
  localnode,
  faucet,
  hello,
  compgen,
  upgrade,
  test,
  trace,
];
