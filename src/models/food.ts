export enum Size {
  Small = 0,
  Medium = 1,
  Large = 2,
}

export default class Food {
  name: string
  calories: number
  price: number
  size: Size

  getSizeString(): string {
    return Size[this.size]
  }

  constructor(name: string, calories: number, price: number, size: Size) {
    this.name = name
    this.calories = calories
    this.price = price
    this.size = size
  }
}
