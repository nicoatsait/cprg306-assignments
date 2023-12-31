'use client';
import React, { useState } from 'react';
import Navbar from '../navbar';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';


export default function Home() {


const [items, setItems] = useState(itemsData);
const [selectedItem, setSelectedItem] = useState('');

const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
};

const handleItemSelect = (item) => {

  let cleanedName = item.name.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🧼/, '').trim();
    const commaIndex = cleanedName.indexOf(',');
    if (commaIndex !== -1) {
        cleanedName = cleanedName.substring(0, commaIndex);
    };
  setSelectedItem(cleanedName);
};

  return (
    <main className="flex min-h-screen flex-col p-24 bg-sky-400   ">
    <Navbar />
      <div className="pt-10">
        <h1 className="pb-5 text-6xl font-bold text-center text-rose-950  ">
            My Shopping List
            
        </h1>
      
        <div className='pb-5'>
            <NewItem onAddItem={handleAddItem} />
        </div>
        <div>
          <div className="flex">
            <div className="w-1/2 pl-4">
              <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2 pl-4 mt-8">
              <div className="h-[1275px] overflow-y-auto">
              <MealIdeas ingredient={selectedItem} />
              </div>
            </div>
            
          </div>
        </div>
     
      </div>
    </main>
  )
}