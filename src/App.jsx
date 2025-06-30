import React, { useState } from "react";
// import TodoList from "./Components/NewTodoList";
import ToDoList from "./Components/ToDoList";
import Header from "./Components/Header";
import './App.css';
import Footer from "./Components/Footer";


export default function App() {
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
    setTodos(todos.filter((_, i) => i !== index));
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
    setIsEditing(false);
    setEditIndex(null);
    setTodo("");
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    // <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
   
    <div className="max-w-md mx-auto p-6 bg-red-300 shadow-lg mt-10 mb-10 rounded">
      <Header />
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          className="flex-grow border border-white bg-white rounded px-3 py-2"
        />
        <button
          onClick={isEditing ? handleUpdate : handleAdd}
          className="bg-blue-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-blue-700"
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>
      <ToDoList
        todos={todos}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggle={toggleComplete}
      />

      <Footer />
    </div>
  );
}
  