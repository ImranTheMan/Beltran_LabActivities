// Item.js

import React, { useState } from "react";
import "./Button.css";

const Item = ({ item, onDeleteClick, onToggleCheck, onEdit }) => {
  const [newName, setNewName] = useState("");

  const handleButtonClick = () => {
    onToggleCheck(item.id); // Notify the parent component about the toggle
  };

  const handleDeleteClick = () => {
    onDeleteClick(item.id);
  };

  const handleEditClick = () => {
    const newName = prompt("Enter the new name:", item.input);
    if (newName !== null) {
      onEdit(item.id, newName);
    }
  };

  return (
    <div className="todo-list">
      <div
        className="todo-item"
        style={{ textDecoration: item.isChecked ? "line-through" : "none" }}
      >
        <span className="quantity">{item.quantity}</span>&nbsp;&nbsp;&nbsp;
        <span className="input">{item.input}</span>&nbsp;
        <button className="button-54" onClick={handleButtonClick}>
          Done
        </button>
        <button className="button-54" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="button-54" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Item;
