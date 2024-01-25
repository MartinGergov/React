import { useState } from "react";
import classes from "./TodoList.module.scss";

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
    <div className={classes.list}>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className={classes.remove} onClick={handleRemove}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        value={newTodo}
        onChange={(event) => setNewTodo(event.target.value)}
      />
      <button className={classes.button} onClick={handleAddTodo}>
        Add to the list
      </button>
      <button className={classes.button} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
