import mongoose from "mongoose"

// TODO: map between size enum and strings
export enum Size {
  Small = 0,
  Medium = 1,
  Large = 2,
}

// TODO: work out best way to have methods on these models

// export default class Food {
//   name: string
//   calories: number
//   price: number
//   size: Size

//   getSizeString(): string {
//     return Size[this.size]
//   }

//   constructor(name: string, calories: number, price: number, size: Size) {
//     this.name = name
//     this.calories = calories
//     this.price = price
//     this.size = size
//   }
// }

//Mongoose
const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    calories: {
      type: Number,
      unique: false,
      required: true,
    },
    price: {
      type: Number,
      unique: false,
      required: true,
    },
    size: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
)

const Food = mongoose.model("Food", foodSchema)

export default Food
