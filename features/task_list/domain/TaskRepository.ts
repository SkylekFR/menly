import { Task } from './Task'

export interface TaskRepository {
    getTasks(): Promise<Task[]>
}
