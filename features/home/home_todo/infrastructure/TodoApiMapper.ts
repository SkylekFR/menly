import { Todo } from '../domain/Todo'
import { CreateTodoRequest } from '../domain/TodoRepository'
import { ApiTodo } from './TodoApiParser'

export const toApiPayload = (todo: CreateTodoRequest): Partial<ApiTodo> => ({
    title: todo.name,
    description: todo.description || undefined,
    deadline: todo.deadline || undefined,
    assigned_username: todo.assignee || undefined,
    points: todo.points,
})

export const toTodo = (payload: ApiTodo): Todo => ({
    id: String(payload.id),
    name: payload.title,
    assignee: payload.assigned_username ?? '',
    points: Number(payload.points),
    description: payload.description,
    deadline: payload.deadline,
})
