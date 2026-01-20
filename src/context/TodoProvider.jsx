import { useState, useMemo } from "react";
import { TodoContext } from "./TodoContext";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function TodoProvider({ children }) {
    const [todos, setTodos] = useLocalStorage("todos", []);
    const [filter, setFilter] = useState("all");

    const addTodo = (text) => {
        setTodos(prev => [
            ...prev,
            { id: Date.now(), text, completed: false }
        ]);
    };

    const toggleTodo = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    const filteredTodos = useMemo(() => {
        if (filter === "completed") {
            return todos.filter(todo => todo.completed);
        }
        if (filter === "pending") {
            return todos.filter(todo => !todo.completed);
        }
        return todos;
    }, [todos, filter]);

    return (
        <TodoContext.Provider
            value={{
                todos: filteredTodos,
                addTodo,
                toggleTodo,
                removeTodo,
                setFilter,
                filter
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}