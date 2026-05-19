// features/tasks/viewmodels/useTaskViewModel.ts

import { useEffect, useState } from 'react'
import { getTodosUseCase } from './domain/GetTodosUseCase'
import { Todo } from './domain/Todo'


type TodoListUiState = {
    todos: Todo[]
    isLoading: boolean
    error: string | null
}

export const useHomeTodoViewModel = () => {

    const [uiState, setUiState] = useState<TodoListUiState>({
        todos: [],
        isLoading: true,
        error: null,
    })

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await getTodosUseCase()
                setUiState({ todos: data, isLoading: false, error: null })
            } catch {
                setUiState(prev => ({ ...prev, isLoading: false, error: 'Erreur de chargement.' }))
            }
        }

        loadTasks()
    }, [])

     useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await getTodosUseCase()
                setUiState({ todos: data, isLoading: false, error: null })
            } catch {
                setUiState(prev => ({ ...prev, isLoading: false, error: 'Erreur de chargement.' }))
            }
        }

        loadTasks()
    }, [])

    return { uiState }
}