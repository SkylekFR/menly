import { useEffect, useState } from 'react'
import { getTaskListUseCase } from '../domain/GetTaskListUseCase'
import { Task } from '../domain/Task'
import { RemoteTaskRepository } from '../data/RemoteTaskRepository'

const taskRepository = new RemoteTaskRepository()

type TaskListUiState = {
    tasks: Task[]
    isLoading: boolean
    error: string | null
}

export const useTaskListViewModel = () => {
    const [uiState, setUiState] = useState<TaskListUiState>({
        tasks: [],
        isLoading: true,
        error: null,
    })

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const tasks = await getTaskListUseCase(taskRepository)
                setUiState({ tasks, isLoading: false, error: null })
            } catch (error) {
                const message = error instanceof Error ? error.message : String(error)
                setUiState({ tasks: [], isLoading: false, error: `Erreur de chargement. ${message}` })
            }
        }

        loadTasks()
    }, [])

    return { uiState }
}
