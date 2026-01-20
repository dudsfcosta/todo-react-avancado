import { useTodo } from "../context/UseTodo.jsx";

export function TodoItem({ todo }) {
    const { toggleTodo, removeTodo } = useTodo();

    return (
        <li>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
            <button onClick={() => removeTodo(todo.id)}>❌</button>
        </li>
    );
}
