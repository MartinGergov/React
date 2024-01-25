import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleAddTodo() {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo("");
    }
  }

  function handleReset() {
    setTodos([]);
  }

  function handleRemove(index) {
    const deleteTodos = [...todos];
    deleteTodos.splice(index, 1);
    setTodos(deleteTodos);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={handleRemove}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add to the list</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
