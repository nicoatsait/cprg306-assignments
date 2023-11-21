'use client';
import React, { useState, useEffect } from 'react';

import ItemList from './item-list';
import NewItem from './new-item';
import { getItemList } from '../_services/shopping-list-service';
import { addNewItem } from '../_services/shopping-list-service';
import { useUserAuth } from '../_utils/auth-context';
import MealIdeas from './meal-ideas';
import Navbar from './navbar';


export default function Home() {

const { user, githubSignIn, firebaseSignOut } = useUserAuth();
const userId = user ? user.uid : null;
const [items, setItems] = useState([]);
const [selectedItem, setSelectedItem] = useState('');



useEffect(() => {
  const fetchData = async () => {
    if (userId) {
      try {
      const itemsFromDb = await getItemList(userId); 
      setItems(itemsFromDb);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
    }
    
  };
  fetchData();
}, [userId]);


const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
};

const handleItemSelect = (item) => {

  let cleanedName = item.name.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🧼/, '').trim();
    const commaIndex = cleanedName.indexOf(',');
    if (commaIndex !== -1) {
        cleanedName = cleanedName.substring(0, commaIndex);
    }
    console.log(cleanedName);
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
            <NewItem onAddItem={handleAddItem} userId={userId}/>
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