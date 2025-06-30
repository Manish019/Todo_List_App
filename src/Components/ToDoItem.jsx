import React from "react";

export default function ToDoItem({ item, index, onDelete, onEdit, onToggle }) {
  return (
    <li className="flex justify-between items-start gap-4 ">
      {/* ✅ Main Task Box */}
      <div
        className={`flex-1 p-2 border rounded shadow-sm cursor-pointer ${
          item.completed ? "line-through text-black bg-amber-50" : "text-black bg-amber-50"
        }`}
        onClick={() => onToggle(index)}
      >
        {item.text}
      </div>

      {/* ✅ Buttons Outside Box */}
      <div className="flex gap-2 ml-4">
        <button
          onClick={() => onEdit(index)}
          className="border border-white text-yellow-500 hover:bg-yellow-100 px-2 py-1 rounded cursor-pointer"
          title="Edit"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(index)}
          className="border border-white text-red-500 hover:bg-red-100 px-2 py-1 rounded cursor-pointer"
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
