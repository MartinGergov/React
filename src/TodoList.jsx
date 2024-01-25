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

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <input
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button onClick={handleAddTodo}>Add to the list</button>
    </div>
  );
}
