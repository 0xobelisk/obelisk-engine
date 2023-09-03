export type ComponentMapType = string | Record<string, string | object>
export type SingletonType = {
    type: string,
    init: string,
}

export type singletonComponentMapType = string | Record<string, string | object>


export type ObeliskConfig = {
    project_name: string,
    systems: string[],
    components: Record<string, ComponentMapType>
    singletonComponents: Record<string, SingletonType>
}


export function isSingletonType(s: any): boolean {

    if (typeof s !== 'object' || s === null) {
        return false;
    }

    return 'type' in s && 'init' in s;
}