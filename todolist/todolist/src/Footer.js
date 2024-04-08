import React, { useState } from 'react';

function Footer({ items }) {
    let itemCount = items.length;
    let itemCheck = items.filter((item) => item.isChecked).length; // Count checked items
    let percentage = (itemCheck / itemCount) * 100 || 0; 
    console.log(itemCount);
    return (
        <div>
            <p>
                You have {itemCount} item in your list, and you already completed {itemCheck}, {percentage}%
            </p>
        </div>
    )

}
export default Footer;
