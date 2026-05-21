const API_BASE_URL = 'http://10.0.2.2:5000/api'
const HOUSEHOLD_TODOS_PATH = '/households/1/tasks'

const getUrl = () => `${API_BASE_URL}${HOUSEHOLD_TODOS_PATH}`

const fetchJson = async (url: string, init?: RequestInit): Promise<unknown> => {
    const response = await fetch(url, init)

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`)
    }

    return response.json()
}

export const getTodos = async (): Promise<unknown> => {
    return fetchJson(getUrl())
}

export const createTodo = async (body: unknown): Promise<unknown> => {
    return fetchJson(getUrl(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
}
