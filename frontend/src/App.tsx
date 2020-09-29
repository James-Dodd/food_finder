import React, { useState, useEffect } from "react"
import "./App.css"
import IFood from "./models/food"
import FoodItem from "./components/FoodItem"

function App() {
  // let [basket, setBasket] = useState<string[]>([])
  let [menu, setMenu] = useState<IFood[]>([])

  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((response) => response.json())
      .then((response) => setMenu(response))
      .catch((e) => console.log(e))
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
