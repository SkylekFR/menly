import { Task } from './Task'
import { TaskRepository } from './TaskRepository'

export const getTaskListUseCase = (taskRepository: TaskRepository): Promise<Task[]> =>
    taskRepository.getTasks()
