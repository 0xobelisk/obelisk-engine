import { ObeliskConfig } from "../../types";
import { formatAndWriteMove } from "../formatAndWrite";

export function generateEntityKey(config: ObeliskConfig, srcPrefix: string) {
  let code = `module ${config.projectName}::entity_key {
    use std::vector;
    use sui::address;
    use sui::object;

    public fun from_object<T: key + store>(object: &T): address {
        object::id_address(object)
    }

    public fun from_bytes(bytes: vector<u8>): address {
        let len = vector::length(&bytes);
        assert!(len != 0 && len <= 32, 0);

        let offset = address::length() - len;

        let i = 0;
        while (i < offset) {
            vector::push_back(&mut bytes,0u8);
            i = i + 1;
        };

        address::from_bytes(bytes)
    }

    public fun from_u256(x: u256): address {
        address::from_u256(x)
    }
}
`;
  formatAndWriteMove(
    code,
    `${srcPrefix}/contracts/${config.projectName}/sources/entity_key.move`,
    "formatAndWriteMove"
  );
}
