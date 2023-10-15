"use client";
import React, { useState } from 'react';
import items from './items.json';
import Item from './item'; // Import the Item component

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name'); // Set the default sort to be by name
//Use JavaScript's sort function to sort the items array based on the sortBy state variable
//If the sortBy state variable is 'name', then sort by name property
//If the sortBy state variable is 'category', then sort by category property
    const sortByName = () => {
        setSortBy('name');
    };
    const sortByCategory = () => {
        setSortBy('category');
    };
    const groupByCategory = () => {
        setSortBy('category');
    };

    const sortedItems = items.sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;

        
    });
    
    

    return (
        <div>
            <div className="flex justify-between w-1/3   ">
                <button
                 onClick={sortByName}
                 className=" px-3 py-1 shadow-xl text-black bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block" >
                    Sort by Name
                </button>
                <button
                 onClick={sortByCategory}
                 className=" px-3 py-1 shadow-xl text-black bg-violet-800 hover:bg-blue-500 max-w-md rounded-md font-semibold inline-block" >
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
                        />
                    ))}
                </div>
                    
               
        </div>
        </div>
        

    )

}
