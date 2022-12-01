import { TodoProvider } from './context/TodoProvider';

export const TodoApp = () => {
    return (
        //*1- TODO LO QUE ENCERREMOS DENTRO DE NUESTRO PROVIDER RECIBIRAN LOS DATOS DEL CONTEXTO
        <TodoProvider>
            <h1>Todo:</h1>
            <ul>
                <li>TODO 1</li>
                <li>TODO 2</li>
                <li>TODO 3</li>
            </ul>
        </TodoProvider>
    )
}
