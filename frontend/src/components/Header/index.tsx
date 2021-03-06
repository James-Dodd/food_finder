import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: red;
  font-size: 81px;
`

interface IHeaderProps {
  name: string
  age?: number
  children: React.ReactNode
}

export default function Header(props: IHeaderProps) {
  return (
    <StyledH1>
      <div>{props.children}</div>
    </StyledH1>
  )
}
