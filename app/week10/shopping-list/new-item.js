"use client";
import React, { useState } from 'react';

import Link from 'next/link';
import { addNewItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';



export default function NewItem({ onAddItem, userId}) {
    
    const { user, githubSignIn, firebaseSignOut } = useUserAuth();

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    const [nameError, setNameError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (name.trim() === "") {
            setNameError("Please enter an item name.");
            return;
        } else {
            setNameError("");
        }
        

        const item = {
            name: name,
            quantity: quantity,
            category: category
        };

        if (userId) {
            try {
              await addNewItem(userId, item);
                onAddItem(item);
            } catch (error) {
              console.error('Error adding new item:', error);
            }
          }


        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return (
        <main className="p-1">
            
            <div className="mt-0">
                <form onSubmit={handleSubmit}
                className="text-black p-2 bg-sky-500 max-w-sm w-full m-auto rounded-xl shadow-md "
                id="form"
                >
                    <div>
                        <label className="">
                        
                        <input
                        type="text"
                        name="item-name"
                        placeholder='Item Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        
                        className="w-full mt-1 mb-2 border-2 border-gray-500 p-2 rounded-lg font-sans focus:outline-none  focus:ring-1  focus:border-blue-700 focus:ring-blue-700 focus:ring-opacity-75 active:border-blue-700 active:ring-blue-700 active:ring-opacity-75"
                        />
                        {nameError ?(
                        <p className="text-red-500">{nameError}</p>
                        ) : null}
                    </label>
                    </div>
                    
                    <div className="flex justify-between">
                       <label className="">
                        
                        <input
                        type='number'
                        min={1}
                        max={99}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        className="w-20 ml-1 border-2 border-gray-500 p-2 rounded-lg font-sans focus:outline-none focus:ring-1 focus:border-blue-700 focus:ring-blue-700 focus:ring-opacity-75 active:border-blue-700 active:ring-blue-700 active:ring-opacity-75"
                        />
                    </label>
                    <label>
                        
                        <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                        className="ml-1 border-2 border-gray-500 p-2 rounded-lg font-sans focus:outline-none focus:ring-1 focus:border-blue-700 focus:ring-blue-700 focus:ring-opacity-75 active:border-blue-700 active:ring-blue-700 active:ring-opacity-75"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="pantry">Pantry</option>
                            <option value="frozen foods">Frozen Foods</option>
                            <option value="canned goods">Canned Goods</option>
                            <option value="dry goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </label> 
                    </div>
                    
                    <label>
                        <input 
                        type="submit" 
                        value="Submit"
                        className="w-full mt-4 py-4 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 focus:ring-offset-2 focus:ring-offset-blue-200"
                         />
                    </label>
                </form>
            </div>
        </main>
    );
}