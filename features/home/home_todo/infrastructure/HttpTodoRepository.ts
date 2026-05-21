import { Todo } from '../domain/Todo'
import { CreateTodoRequest, TodoRepository } from '../domain/TodoRepository'
import { createTodo as createTodoRaw, getTodos as getTodosRaw } from './TodoApiClient'
import { toApiPayload, toTodo } from './TodoApiMapper'
import { parseSingleTodo, parseTodos } from './TodoApiParser'

export class HttpTodoRepository implements TodoRepository {
    async createTodo(todo: CreateTodoRequest): Promise<Todo> {
        const payload: unknown = await createTodoRaw(toApiPayload(todo))
        const apiTodo = parseSingleTodo(payload)
        return toTodo(apiTodo)
    }

    async getTodos(): Promise<Todo[]> {
        const payload: unknown = await getTodosRaw()
        const apiTodos = parseTodos(payload)
        return apiTodos.map(toTodo)
    }
}
