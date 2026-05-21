export type ApiObject = Record<string, unknown>

export type ApiTodo = {
    id: string | number
    household_id?: string | number
    title: string
    description?: string
    deadline?: string
    assigned_username?: string
    points: string | number
}

export const parseTodos = (payload: unknown): ApiTodo[] => {
    const rawTodos = extractTodos(payload)

    if (!Array.isArray(rawTodos)) {
        throw new Error('Failed to parse todos: expected an array')
    }

    return rawTodos as ApiTodo[]
}

export const parseSingleTodo = (payload: unknown): ApiTodo => {
    if (isApiObject(payload) && isTodoLike(payload)) {
        return payload as ApiTodo
    }

    if (isApiObject(payload) && isApiObject((payload as ApiObject).data) && isTodoLike((payload as ApiObject).data as ApiObject)) {
        return (payload as ApiObject).data as ApiTodo
    }

    if (isApiObject((payload as ApiObject).data) && Array.isArray((payload as ApiObject).data)) {
        const items = (payload as ApiObject).data as unknown[]
        if (items.length > 0 && isApiObject(items[0]) && isTodoLike(items[0] as ApiObject)) {
            return items[0] as ApiTodo
        }
    }

    throw new Error('Failed to parse todo from response')
}

const extractTodos = (payload: unknown): unknown[] => {
    if (Array.isArray(payload)) return payload
    if (!isApiObject(payload)) return []

    for (const key of Object.keys(payload)) {
        const candidate = (payload as ApiObject)[key]
        if (Array.isArray(candidate) && candidate.length > 0 && isApiObject(candidate[0])) {
            const obj = candidate[0] as ApiObject
            if ('id' in obj || 'title' in obj || 'household_id' in obj) return candidate
        }
    }

    if (isApiObject((payload as ApiObject).data)) {
        const dataObj = (payload as ApiObject).data as ApiObject
        for (const key of Object.keys(dataObj)) {
            const candidate = dataObj[key]
            if (Array.isArray(candidate) && candidate.length > 0 && isApiObject(candidate[0])) {
                const obj = candidate[0] as ApiObject
                if ('id' in obj || 'title' in obj || 'household_id' in obj) return candidate
            }
        }
    }

    return []
}

const isTodoLike = (value: ApiObject): boolean =>
    'id' in value || 'title' in value || 'household_id' in value

const isApiObject = (value: unknown): value is ApiObject =>
    typeof value === 'object' && value !== null
