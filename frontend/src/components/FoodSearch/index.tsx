import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: red;
  font-size: 80px;
`

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
