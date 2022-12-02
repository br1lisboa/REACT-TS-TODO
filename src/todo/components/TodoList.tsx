import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"
import { TodoItem } from "./TodoItem"

export const TodoList = () => {

    //* Necesito ver cada uno de los TODOS que tengo en mi STATE.
    const { todoState } = useContext(TodoContext)
    const { todos } = todoState

    return (
        <ul>
            {
                todos.map(todo =>
                    <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>
    )
}

