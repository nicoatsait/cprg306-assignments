'use client';
import React, { useState } from 'react';
import Navbar from '../navbar';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';


export default function Home() {


const [items, setItems] = useState(itemsData);

const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
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
          <ItemList items={items} />
        </div>
     
      </div>
    </main>
  )
}