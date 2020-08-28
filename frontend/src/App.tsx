import React, { useState } from "react"
import "./App.css"
import FoodSelect from "./components/FoodSelect/index"

function App() {
  let [basket, setBasket] = useState<string[]>([])

  const updateBasket = (food: string) => {
    basket.push(food)
    setBasket(basket)
  }

  return (
    <div className="App">
      <FoodSelect name="Hamburger" onSubmit={updateBasket} />
      <FoodSelect name="Hotdog" onSubmit={updateBasket} />
      <FoodSelect name="Cheeseburger" onSubmit={updateBasket} />
    </div>
  )
}

export default App
