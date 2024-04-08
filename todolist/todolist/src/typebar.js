// AddType.js
import React, { useState } from 'react';
import "./Button.css";
function AddType({ onAddItems }) {
    const [input, setInput] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isChecked, setIsChecked] = useState(false); // Initialize isChecked state

    function handleSubmit(e) {
        e.preventDefault();
        if (!input) return;
        const newItem = { input, quantity, isChecked, id: Date.now() }; // Include isChecked and quantity in newItem
        setInput("");
        setQuantity(1);
        setIsChecked(false); // Reset isChecked after adding item
        onAddItems(newItem);
    };

    // Function to toggle isChecked state
    function toggleIsChecked() {
        setIsChecked(!isChecked);
    }

    // Function to handle quantity change
    function handleQuantityChange(e) {
        setQuantity(Number(e.target.value));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="searchbar d-flex justify-content-center align-items-center">
                <select value={quantity} onChange={handleQuantityChange}>
                    {Array.from({ length: 40 }, (_, i) => i + 1).map((num) => (
                        <option value={num} key={num}>{num}</option>
                    ))}
                </select>   
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="form-control" placeholder="Add an Item..." />
                <button type="submit" className="button-54" onClick={toggleIsChecked}>Done</button>
            </div>
        </form>
    );
}

export default AddType;
