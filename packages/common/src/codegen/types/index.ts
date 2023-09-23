// export type ComponentMapType = string | Record<string, string | object>
export type ComponentMapType = string | Record<string, string>;
export type SingletonType =
  | {
      type: string;
      init: string;
    }
  | {
      type: Record<string, string>;
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
