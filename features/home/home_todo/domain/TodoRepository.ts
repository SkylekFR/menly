import { Todo } from './Todo'

export type CreateTodoRequest = Omit<Todo, 'id'>

export interface TodoRepository {
    getTodos(): Promise<Todo[]>
    createTodo(todo: CreateTodoRequest): Promise<Todo>
}
