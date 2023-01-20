import React from 'react'
import FoodItem from './FoodItem'

const FoodList = () => {
  return (
    <ul>
    <FoodItem foodName = "짜장면" price={1000}/>
    <FoodItem foodName = "짬뽕"price={2000}/>
    <FoodItem foodName = "탕수육"price={3000}/>
    <FoodItem foodName = "볶음밥"price={4000}/>
    </ul>
    
  )
}

export default FoodList