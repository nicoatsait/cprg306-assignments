"use client";
import React, { useState } from 'react';
import Item from './item'; // Import the Item component

export default function ItemList( props ) {
    const [sortBy, setSortBy] = useState('name');

    const sortByName = () => {
        setSortBy('name');
    };

    const sortByCategory = () => {
        setSortBy('category');
    };

    const sortedItems = [...props.items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });


    const handleItemSelect = (item) => {
        props.onItemSelect(item);   
    };

    return (
        <div>
            <div className="flex justify-between w-1/3">
                <button
                    onClick={sortByName}
                    className="px-3 py-1 shadow-xl text-black bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block"
                >
                    Sort by Name
                </button>
                <button
                    onClick={sortByCategory}
                    className="px-3 py-1 shadow-xl text-black bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block"
                >
                    Sort by Category
                </button>
            </div>
            <div className="mt-2">
                <div className=" ">
                    {sortedItems.map((item) => (
                        <Item
                            key={item.name}
                            name={item.name}
                            quantity={item.quantity}
                            category={item.category}
                            onSelect={handleItemSelect}
                            
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
