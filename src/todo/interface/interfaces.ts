
//* Interface de cada TODO
export interface Todo {
    id: string,
    description: string,
    completed: boolean
}

//* Interface del ESTADO INICIAL
export interface TodoState {
    todoCount: number,
    todos: Todo[],
    completed: number,
    pending: number
}