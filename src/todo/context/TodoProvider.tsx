import { TodoContext } from './TodoContext';
import { TodoState } from '../interface/interfaces';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

//* Asi es como quiero que luzca el estado inicial
const INITIAL_STATE: TodoState = {
    todoCount: 1,
    todos: [
        {
            id: '1',
            description: 'Recolectar la piedra del alma',
            completed: false
        },
        {
            id: '2',
            description: 'Recolectar las piedra del infinito',
            completed: false
        },
    ],
    completed: 0,
    pending: 1
}

interface TodoProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
    //* Usualmente cuando usamos un provider tambien utilizamos reducers
    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE)

    const toggleTodo = (id: string) => {
        dispatch({ type: 'toggleTodo', payload: { id } })
    }

    return (
        //*1- Para crear el PROVIDER, importamos nuestro context.
        //*2- Este proveedor va a ser conocido como un HOC (hight order component), que recibira por props los childrens.
        //*3- Estos children recibiran toda la informacion que compartamos en el VALUE
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
