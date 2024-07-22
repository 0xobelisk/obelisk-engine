import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";
import {
  getRegisterSchema,
  getUseSchema,
  capitalizeFirstLetter,
} from "./common";

export function generateAppKey(config: ObeliskConfig, srcPrefix: string) {
  let code = `module ${config.name}::app_key {
  /// Authorization token for the app.
    public struct AppKey has drop {}

    public(package) fun new(): AppKey {
        AppKey {  }
    }
}
`;
  formatAndWriteMove(
    code,
    `${srcPrefix}/contracts/${config.name}/sources/codegen/app_key.move`,
    "formatAndWriteMove"
  );
}
