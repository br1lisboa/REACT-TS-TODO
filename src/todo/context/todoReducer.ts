import { Todo, TodoState } from '../interface/interfaces';

type TodoAction =
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: { id: string } }

//* Un reducer tiene que trabajar con dos argumentos, el ESTADO ANTERIOR, y una ACCION.
export const todoReducer = (state: TodoState, action: TodoAction): TodoState => {

    //* En mi switch voy a estar evaluando mi ACTION.TYPE
    switch (action.type) {
        case 'addTodo':
            return {
                //* Para este caso, del addTodo, SIEMPPRE se retorna un NUEVO ESTADO, desestructuramos el estado,
                //* y luego AGREGAMOS el nuevo todo.
                ...state,
                todos: [...state.todos, action.payload]
            }
        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({ ...todo }) => {
                    if (todo.id === action.payload.id) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        default:
            //* SIEMRE RETORNA UN NUEVO ESTADO
            return state;
    }

}
