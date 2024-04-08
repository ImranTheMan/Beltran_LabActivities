import React, { useState } from 'react';
import Header from './header.js';
import './App.css';
import AddType from './typebar.js';
import ItemList from './itemList.js';
import Footer from './Footer.js';
import Sortby from './Sortby.js'; // Import Sortby component
import './Button.css';

function App() {
    const [items, setItems] = useState([]);

    function handleClearList() {
        const confirmed = window.confirm(
            "Are you sure you want to clear the list?"
        );
        if (confirmed) {
            setItems([]);
        }
    }

    function handleAddItems(item) {
        setItems((items) => [...items, { ...item, isChecked: false }]);
    }

    function handleDeleteItem(itemId) {
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }

    function handleToggleCheck(itemId) {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    }
    function handleEditItem(itemId, newName) {
        const editedItems = items.map(item => {
            if (item.id === itemId) {
                return { ...item, input: newName };
            }
            return item;
        });
        setItems(editedItems);
    }

    function handleSortBy(option) {
        let sortedItems = [...items];
        switch (option) {
            case 'alphabetical':
                sortedItems.sort((a, b) => a.input.localeCompare(b.input));
                break;
            case 'quantity':
                sortedItems.sort((a, b) => a.quantity - b.quantity);
                break;
            case 'done':
                sortedItems.sort((a, b) => {
                    if (a.isChecked && !b.isChecked) return 1;
                    if (!a.isChecked && b.isChecked) return -1;
                    return 0;
                });
                break;
            default:
                sortedItems.sort((a, b) => a.id - b.id);
                break;
        }
        setItems(sortedItems);
    }

    return (
        <div className="App">
            <Header />
            <div style={{ marginTop: '125px' }}>
                <AddType onAddItems={handleAddItems} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <Sortby sortBy={handleSortBy} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <ItemList items={items} onDeleteClick={handleDeleteItem} onToggleCheck={handleToggleCheck} onEdit={handleEditItem} />
            </div>
            <div style={{ marginTop: '20px' }}>
                <Footer items={items} />
            </div>

            <br />
            <button className='button-54'style={{marginBottom:"50px"}} onClick={handleClearList}>Clear</button>
        </div>
    );
}

export default App;
