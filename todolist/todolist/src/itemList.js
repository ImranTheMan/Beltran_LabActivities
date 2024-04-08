import React from 'react';
import Item from './Item';

const ItemList = ({ items, onDeleteClick, onToggleCheck, onEdit }) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} onDeleteClick={onDeleteClick} onToggleCheck={onToggleCheck} onEdit={onEdit} />
            ))}
        </div>
    );
};

export default ItemList;
