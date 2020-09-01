import React, { useState, useEffect } from "react"
import "./App.css"
import FoodSelect from "./components/FoodSelect/index"

function App() {
  let [basket, setBasket] = useState<string[]>([])

  const updateBasket = (food: string) => {
    basket.push(food)
    setBasket(basket)
  }

  useEffect(() => {
    fetch("/hello")
      .then((response) => response.json())
      .then((response) => console.log(response))
  })

  return (
    <div className="App">
      <FoodSelect name="Hamburger" onSubmit={updateBasket} />
      <FoodSelect name="Hotdog" onSubmit={updateBasket} />
      <FoodSelect name="Cheeseburger" onSubmit={updateBasket} />
    </div>
  )
}

export default App
