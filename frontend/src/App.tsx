import React, { useState, useEffect } from "react"
import "./App.css"
import FoodSelect from "./components/FoodSelect/index"
import IFood from "./models/food"
import FoodItem from "./components/FoodItem"

function App() {
  // let [basket, setBasket] = useState<string[]>([])
  let [menu, setMenu] = useState<IFood[]>([])

  useEffect(() => {
    fetch("/menu")
      .then((response) => response.json())
      .then((response) => setMenu(response))
  }, [])

  return (
    <div className="App">
      {menu.map((foodItem) => {
        return <FoodItem item={foodItem} />
      })}
    </div>
  )
}

export default App
