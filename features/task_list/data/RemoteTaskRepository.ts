import { Task } from '../domain/Task'
import { TaskRepository } from '../domain/TaskRepository'
import { HttpTodoRepository } from '@/features/home/home_todo/infrastructure/HttpTodoRepository'
import { Todo } from '@/features/home/home_todo/domain/Todo'

const mapTodoToTask = (todo: Todo): Task => ({
    id: todo.id,
    title: todo.name,
    assignee: todo.assignee,
    points: todo.points,
    description: todo.description,
    deadline: todo.deadline,
})

export class RemoteTaskRepository implements TaskRepository {
    private readonly todoRepository = new HttpTodoRepository()

    async getTasks(): Promise<Task[]> {
        const todos = await this.todoRepository.getTodos()
        return todos.map(mapTodoToTask)
    }
}
