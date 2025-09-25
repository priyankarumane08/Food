import React from 'react'
import{NavLink} from'react-router-dom';

export const MealCards = ({detail}) => {
    console.log(detail);
    
  return (
    <div className='meals'>
        {!detail ? "Data Not Found": detail.map((curItem)=>{
            return(
                <div className='mealImg'>
                     <img src={curItem.strMealThumb} alt="" />
                     <p>{curItem.strMeal}</p>
                     <NavLink to={`/${curItem.idMeal}`}><button >Reciepe</button></NavLink>
                     
        </div>
        )
            }) 
        
        }
    </div>
  )
}
