"use client";

import React, { useState, useEffect } from 'react';


const MealIdeas = ( {ingredient}) => {
    const [meal, setMeal] = useState([]);

    async function getMealIdeas(){
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

            const data = await response.json();
            setMeal(data.meals);
            console.log(data.meals);
        } catch (error) {
            console.error("ERROR:",error);
        }

    }
    useEffect(() => {
        getMealIdeas();
    }, [ingredient]);

    return(
        <div>
            <h1>Meal Ideas</h1>
            {meal.map((meal) => (
                <div key={meal.idMeal}>
                    <h2>{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                </div>
            ))}
        </div>
    )

}

export default MealIdeas;

