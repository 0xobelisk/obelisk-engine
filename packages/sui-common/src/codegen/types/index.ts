export type BaseType =
  | "String"
  | "vector<String>"
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
  | string;

export type StorageDataType =
    | "Struct"
    | "Enum";

export type StorageMapType =
    | "Map"
    | "Bag"
    | "Table";

type Address = string;
type Bool = boolean;
type U8 = number;
type U64 = number;
type U128 = number;
type Vector<T> = T[];

export type BaseValueType =
  | String
  | Address
  | Bool
  | U8
  | U64
  | U128
  | Vector<Address>
  | Vector<Bool>
  | Vector<U8>
  | Vector<Vector<U8>>
  | Vector<U64>
  | Vector<U128>;


export type SchemaData =  {
  name: string;
  type?: StorageDataType;
  fields: Record<string, BaseType> | string[];
}

export type SchemaType =  {
  data?: SchemaData[];
  structure: Record<string, string>;
}

export type ObeliskConfig = {
  name: string;
  description: string;
  systems: string[];
  schemas: Record<string, SchemaType>;
};

export type MoveType =
  | "string"
  | "vector<string>"
  | "String"
  | "vector<String>"
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
  | "vector<u128>";
