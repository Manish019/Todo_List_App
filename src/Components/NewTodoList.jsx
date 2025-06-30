import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!todo.trim()) return;
    setTodos([...todos, { text: todo, completed: false }]);
    setTodo("");
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleEdit = (index) => {
    setTodo(todos[index].text);
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex].text = todo;
    setTodos(updatedTodos);
    // setIsEditing(false);
    // setEditIndex(null);
    setTodo("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>📝 ToDo List</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={isEditing ? handleUpdate : handleAdd}>
        {isEditing ? "Update" : "Add"}
      </button>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {todos.map((item, index) => (
          <li
            key={index}
            style={{
              marginTop: "10px",
              textDecoration: item.completed ? "line-through" : "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span onClick={() => toggleComplete(index)} style={{ cursor: "pointer" }}>
              {item.text}
            </span>
            <div>
              <button onClick={() => handleEdit(index)}>✏️</button>
              <button onClick={() => handleDelete(index)}>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
