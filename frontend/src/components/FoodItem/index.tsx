import React, { useState, FormEvent } from "react"
import IFood from "../../models/food"
import styled from "styled-components"

const StyledFoodItem = styled.div`
  font-family: Calibri;
  color: red;
  font-size: 60px;
  font-weight: 900;
`

interface IFoodItem {
  item: IFood
}

const FoodItem: React.FC<IFoodItem> = (props) => {
  return (
    <StyledFoodItem>
      <p>{props.item.name}</p>
      <p>{props.item.price}</p>
      <p>{props.item.calories}</p>
      <p>{props.item.size}</p>
    </StyledFoodItem>
  )
}

export default FoodItem
