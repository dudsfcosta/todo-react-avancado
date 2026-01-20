import { memo } from "react";
import { useTodo } from "../context/UseTodo.jsx";
import { TodoItem } from "./TodoItem";

function TodoListComponent() {
    const { todos } = useTodo();

    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}

export const TodoList = memo(TodoListComponent);
