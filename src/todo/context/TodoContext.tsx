import { createContext } from "react";
import { TodoState } from '../interface/interfaces';
//*1- Se importa el createContext
//*2- Se crea una constante igual al createContext
//*3- Lo EXPORTAMOS para usarlo en otros lugares

export type TodoContextProps = {
    todoState: TodoState
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)