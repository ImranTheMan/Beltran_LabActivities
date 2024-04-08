import React from 'react';

const Sortby = ({ sortBy }) => {
    const handleSortChange = (e) => {
        const selectedOption = e.target.value;
        sortBy(selectedOption);
    };

    return (
        <div className="sort-container">
            <label htmlFor="sort">Sort By:</label>
            <select id="sort" onChange={handleSortChange}>
                <option value="default">Default</option>
                <option value="alphabetical">Alphabetical</option>
                <option value="quantity">Quantity</option>
                <option value="done">Status</option>
            </select>
        </div>
    );
};

export default Sortby;
