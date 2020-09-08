import mongoose, { Document } from "mongoose"

// TODO: map between size enum and strings
export enum Size {
  Small = 0,
  Medium = 1,
  Large = 2,
}

// TODO: work out best way to have methods on these models

export interface IFood extends Document {
  name: string
  calories: number
  price: number
  size: string
}

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

const Food = mongoose.model<IFood>("Food", foodSchema)

export default Food
