import { TodoProvider } from "./context/TodoProvider";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { TodoFilters } from "./components/TodoFilters.jsx";

function App() {
    return (
        <TodoProvider>
            <h1>To-do List Avançado</h1>
            <TodoForm />
            <TodoFilters />
            <TodoList />
        </TodoProvider>
    );
}

export default App;
