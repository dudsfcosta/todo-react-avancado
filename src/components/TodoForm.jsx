import { useState } from "react";
import { useTodo } from "../context/UseTodo.jsx";

export function TodoForm() {
    const [text, setText] = useState("");
    const { addTodo } = useTodo();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nova tarefa"
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}
