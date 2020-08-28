import React, { useState, FormEvent } from "react"

export default function FoodSearch() {
  let [searchedFood, setSearchedFood] = useState("")
  let [searchedFoods, setSearchedFoods] = useState<string[]>([])

  const updateFood = (e: FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setSearchedFood(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    searchedFoods.push(searchedFood)
    setSearchedFoods(searchedFoods)
    setSearchedFood("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search For Food:
          <input
            type="text"
            name="food"
            id="food"
            value={searchedFood}
            onChange={updateFood}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <h2>Searched foods</h2>
        {searchedFoods.map((food) => (
          <p>{food}</p>
        ))}
      </div>
    </div>
  )
}
