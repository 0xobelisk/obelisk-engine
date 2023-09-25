export type baseType =
  | "address"
  | "bool"
  | "u8"
  | "u64"
  | "u128"
  | "vector<address"
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
export type ComponentMapType = baseType | Record<string, baseType>;
export type SingletonType =
  | {
      type: baseType;
      init: string;
    }
  | {
      type: Record<string, baseType>;
      init: Record<string, string>;
    };

// export type singletonComponentMapType = string | Record<string, string | object>
export type singletonComponentMapType = string | Record<string, string>;

export type ObeliskConfig = {
  name: string;
  description: string;
  systems: string[];
  components: Record<string, ComponentMapType>;
  singletonComponents: Record<string, SingletonType>;
};

export function isSingletonType(s: ComponentMapType | SingletonType): boolean {
  if (typeof s !== "object") {
    // if s is string
    return false;
  }

  // if s is single type
  return "type" in s && "init" in s;
}
