import { useState } from "react";
import "./todoitem.css";

function TodoItem({ id, isComplete, text, removeTodo }) {
  const [checked, setChecked] = useState(isComplete);
  const [editField, setEditField] = useState(text);
  function loadEditField(e) {
    setEditField(
      <input
        type="text"
        onKeyPress={(e) => {
          const { value } = e.target;
          if (e.key === "Enter") {
            setEditField(value);
          }
        }}
      />
    );
  }
  return (
    <div className="todo-container">
      <p className={checked ? "active" : ""}> {editField}</p>

      <button
        onClick={() => {
          removeTodo(id);
        }}
      >
        Delete
      </button>
      <button
        onClick={(e) => {
          loadEditField(e);
        }}
      >
        Edit
      </button>

      <input
        type="checkbox"
        onChange={() => {
          setChecked(!checked);
          console.log(checked);
        }}
        checked={checked}
      />
    </div>
  );
}

export default TodoItem;
