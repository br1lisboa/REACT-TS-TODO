import { Todo } from "../interface/interfaces"
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

interface TodoItemProps {
    todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {

    const { toggleTodo } = useContext(TodoContext)

    const handleDbClick = () => {
        toggleTodo(todo.id)
    }

    return (
        <li
            style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : ''
            }}
            onDoubleClick={handleDbClick}
        >
            {todo.description}
        </li>
    )
}
