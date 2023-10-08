export type BaseType =
  | "address"
  | "bool"
  | "u8"
  | "u64"
  | "u128"
  | "vector<address>"
  | "vector<bool>"
  | "vector<u8>"
  | "vector<vector<u8>>"
  | "vector<u64>"
  | "vector<u128>"
  | "Option<address>"
  | "Option<bool>"
  | "Option<u8>"
  | "Option<u64>"
  | "Option<u128>";
export type SingletonType =
  | {
      type: BaseType;
      init: string;
    }
  | {
      type: Record<string, BaseType>;
      init: Record<string, string>;
    };

export interface ValueSchemaType {
    valueSchema: Record<string, BaseType> | BaseType;
    ephemeral?: boolean;
    singleton?: boolean;
    init?: any;
}

export type SchemaMapType = BaseType | ValueSchemaType;

export type ObeliskConfig = {
  name: string;
  description: string;
  systems: string[];
  schemas: Record<string, SchemaMapType>;
};

export interface RenderSchemaOptions {
    schemaName: string;
    structName: string;
    ephemeral: boolean;
    singleton: boolean;
    resourceData: BaseType | Record<string, BaseType>
    structAttrs: string[]
    structTypes: string[]
    init: any
}
