import { Todo } from './Todo'
import { TodoRepository } from './TodoRepository'

export const getTodosUseCase = async (todoRepository: TodoRepository): Promise<Todo[]> => {
    return todoRepository.getTodos()
}