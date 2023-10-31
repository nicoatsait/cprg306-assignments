'use client';
import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    // Define the function to fetch meal ideas
    const getMealIdeas = async (ingredient) => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch meal ideas');
        }
        const data = await response.json();
        setMeals(data.meals);
      } catch (error) {
        console.error(error);
      }
    };

    if (ingredient) {
      getMealIdeas(ingredient);
    }
  }, [ingredient]);

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div>
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} onClick={() => handleMealSelect(meal)}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
      {selectedMeal && (
        <div className='mt-5'>
          <h3>{selectedMeal.strMeal}</h3>
          
          <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} />
        </div>
      )}
    </div>
  );
}
