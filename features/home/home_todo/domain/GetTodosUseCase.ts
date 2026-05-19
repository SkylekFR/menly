import { Todo } from "./Todo"

export const getTodosUseCase = (): Promise<Todo[]> => {
    return new Promise(resolve =>
        setTimeout(() => resolve([
            { id: '1', name: 'Courses', assignee: 'Sara', points: 3 },
            { id: '2', name: 'Contrôle technique', assignee: 'Alex', points: 8 },
            { id: '3', name: 'Virement épargne', assignee: 'Alex', points: 5 },
            { id: '4', name: 'Virement épargne', assignee: 'Alex', points: 5 },
        ]), 1000)  // simule 1 seconde de latence réseau
    )
}