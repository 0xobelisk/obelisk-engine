export type ComponentMapType = Record<string, string>

export type ObeliskConfig = {
    project_name: string,
    systems: string[],
    components: Record<string, ComponentMapType>
}
