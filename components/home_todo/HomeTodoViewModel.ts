// features/tasks/viewmodels/useTaskViewModel.ts

import { useEffect, useState } from 'react'

type Todo = {
    id: string
    name: string
    assignee: string
    points: number
}

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
                const data = await fetchTasks()
                setUiState({ todos: data, isLoading: false, error: null })
            } catch {
                setUiState(prev => ({ ...prev, isLoading: false, error: 'Erreur de chargement.' }))
            }
        }

        loadTasks()
    }, [])

    const fetchTasks = (): Promise<Todo[]> =>
        new Promise(resolve =>
            setTimeout(() => resolve([
                { id: '1', name: 'Courses', assignee: 'Sara', points: 3 },
                { id: '2', name: 'Contrôle technique', assignee: 'Alex', points: 8 },
                { id: '3', name: 'Virement épargne', assignee: 'Alex', points: 5 },
            ]), 1000)  // simule 1 seconde de latence réseau
        )

    return { uiState }
}