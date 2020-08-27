import React from "react"

export default function FoodSearch() {
  return (
    <form>
      <label>
        Search For Food:
        <input type="text" name="food" id="food" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
