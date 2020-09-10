import React, { useState, FormEvent } from "react"
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
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer my-token',
            'My-Custom-Header': 'foobar'
        },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch("/order", { method: "POST" })
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
