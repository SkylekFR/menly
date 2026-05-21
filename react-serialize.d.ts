declare module 'react-serialize' {
    export function serialize(element: unknown): string
    
    export function deserialize(
        data: string | object,
        options?: {
            components?: Record<string, unknown>
            reviver?: (
                type: string,
                props: unknown,
                key: string | number,
                components: Record<string, unknown>
            ) => { type: string; props: unknown; key?: string | number; components?: Record<string, unknown> }
        }
    ): unknown
}
