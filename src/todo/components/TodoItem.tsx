import { Todo } from "../interface/interfaces"

interface TodoItemProps {
    todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {

    const handleDbClick = () => {
        console.log('handleDbClick', todo.description)
    }

    return (
        <li onDoubleClick={handleDbClick}>
            {todo.description}
        </li>
    )
}
