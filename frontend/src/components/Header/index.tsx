import React from "react"
import styled from "styled-components"

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

