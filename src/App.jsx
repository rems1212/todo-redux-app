import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./features/todoSlice";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch(addTodo(task));
      setTask("");
    }
  };

  return (
    <div className="todo-container">
  <h1 className="todo-title">📝 Todo List</h1>

  <div className="input-section">
    <input
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Enter task..."
      className="todo-input"
    />
    <button onClick={handleAdd} className="add-btn">Add</button>
  </div>

  <ul className="todo-list">
    {todos.map((todo) => (
      <li key={todo.id} className="todo-item">
        <span
          className={`todo-text ${todo.completed ? "completed" : ""}`}
          onClick={() => dispatch(toggleTodo(todo.id))}
        >
          {todo.text}
        </span>
        <button onClick={() => dispatch(removeTodo(todo.id))} className="delete-btn">❌</button>
      </li>
    ))}
  </ul>
</div>
  );
}

export default App;
