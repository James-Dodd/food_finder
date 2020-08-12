export enum Size {
  Small,
  Medium,
  Large,
}

export default class Food {
  name: string
  calories: number
  price: number
  size: Size

  constructor(name: string, calories: number, price: number, size: Size) {
    this.name = name
    this.calories = calories
    this.price = price
    this.size = size
  }
}
