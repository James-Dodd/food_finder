import React from "react"
import IFood from "../../models/food"
import styled from "styled-components"

const StyledFoodItem = styled.div`
  font-family: Calibri;
  color: red;
  font-size: 20px;
  font-weight: 900;
  border-style: solid;
  margin: 20px;
  padding: 10px;
`

interface IFoodItem {
  item: IFood
}

const FoodItem: React.FC<IFoodItem> = (props) => {
  function handleClick() {
    console.log("Button clicked")
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        food: "hotdog",
        customerId: "53e827b5-7b35-444e-b1ac-0fedebb1adaa",
      }),
    }
    fetch("/order", requestOptions)
  }

  return (
    <StyledFoodItem>
      <p>{props.item.name}</p>
      <p>{props.item.price}</p>
      <p>{props.item.calories}</p>
      <p>{props.item.size}</p>
      <button type="button" onClick={handleClick}>
        Order
      </button>
    </StyledFoodItem>
  )
}

export default FoodItem
