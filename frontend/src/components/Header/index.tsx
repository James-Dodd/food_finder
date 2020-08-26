import React from "react"
import styled from "styled-components"

interface MyOwnH1Props {
  isRed: boolean
  children: React.ReactNode
}

function MyOwnH1(props: MyOwnH1Props) {
  return <h1>{props.children}</h1>
}

const StyledH1 = styled.h1`
  color: red;
  font-size: 80px;
`

interface HeaderProps {
  name: string
  age?: number
  children: React.ReactNode
}

export default function Header(props: HeaderProps) {
  return <StyledH1>{props.children}</StyledH1>
}
