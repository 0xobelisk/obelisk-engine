export type ComponentMapType = string | Record<string, string | object>

export type ObeliskConfig = {
    project_name: string,
    systems: string[],
    components: Record<string, ComponentMapType>
}
