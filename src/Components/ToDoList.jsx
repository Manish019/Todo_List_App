import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, onDelete, onEdit, onToggle }) {
  return (
    <ul className="mt-4 space-y-2">
      {todos.map((item, index) => (
        <ToDoItem
          key={item.id}
          index={index}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}
