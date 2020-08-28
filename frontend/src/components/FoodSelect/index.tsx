import React, { useState, FormEvent } from "react"

interface IFoodSelectProps {
  name: string
  onSubmit: (food: string) => void
}

export default function FoodSelect(props: IFoodSelectProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSubmit(props.name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">{props.name}</button>
    </form>
  )
}
