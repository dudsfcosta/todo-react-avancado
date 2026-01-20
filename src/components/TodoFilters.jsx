import { useTodo } from "../context/UseTodo.jsx";

export function TodoFilters() {
    const { setFilter, filter } = useTodo();

    return (
        <div>
            <button onClick={() => setFilter("all")} disabled={filter === "all"}>
                Todas
            </button>
            <button onClick={() => setFilter("completed")} disabled={filter === "completed"}>
                Concluídas
            </button>
            <button onClick={() => setFilter("pending")} disabled={filter === "pending"}>
                Pendentes
            </button>
        </div>
    );
}
