import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const MealInfo = () => {
  const { mealid } = useParams();
  const [info, setInfo] = useState(null);   // start as null

  useEffect(() => {
    const getInfo = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );
        const jsonData = await res.json();
        console.log(jsonData.meals[0]);
        setInfo(jsonData.meals?.[0] ?? null);
      } catch (err) {
        console.error(err);
        setInfo(null);
      }
    };

    getInfo();
  }, [mealid]); // run once whenever mealid changes

  if (!info) {
    return <p>Data Not Found</p>;
  }

  return (
    <div className='mealInfo'>
      <img src={info.strMealThumb} alt={info.strMeal} />
      <div className='info'>
        <h1>Recipe Detail</h1>
        <button>{info.strMeal}</button>
        <h3>Instructions</h3>
        <p>{info.strInstructions}</p>
      </div>
    </div>
  );
};
export default MealInfo