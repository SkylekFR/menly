import { useEffect, useState } from 'react'
import { getTodosUseCase } from '../domain/GetTodosUseCase'
import { Todo } from '../domain/Todo'
import { CreateTodoRequest } from '../domain/TodoRepository'
import { HttpTodoRepository } from '../infrastructure/HttpTodoRepository'

const todoRepository = new HttpTodoRepository()

type TodoListUiState = {
    todos: Todo[]
    isLoading: boolean
    isMoreTodo: boolean
    error: string | null
}

export const useHomeTodoViewModel = () => {

    const [uiState, setUiState] = useState<TodoListUiState>({
        todos: [],
        isMoreTodo: false,
        isLoading: true,
        error: null,
    })

    const createTask = async (title: string, points: number) => {
        try {
            const newTask: CreateTodoRequest = {
                name: title,
                assignee: '',
                points,
                description: 'a description',
                deadline: '2024-12-31',
            }
            const createdTodo = await todoRepository.createTodo(newTask)
            setUiState(prev => ({ ...prev, todos: [...prev.todos, createdTodo] }))
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error)
            setUiState(prev => ({ ...prev, error: `Erreur de création de tâche. Veuillez réessayer. ${errorMessage}` }))
        }
    }

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await getTodosUseCase(todoRepository)
                setUiState({ todos: data.slice(0, 3), isMoreTodo: data.length > 3, isLoading: false, error: null })
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error)
                setUiState(prev => ({ ...prev, isLoading: false, error: `Erreur de chargement. Veuillez réessayer. ${errorMessage}` }))
            }
        }

        loadTasks()
    }, [])

    return { uiState, createTask }
}
