import mongoose, { Document } from "mongoose"

// TODO: work out best way to have methods on these models

export interface IOrder extends Document {
  food: String
  customerId: String
  orderId: String
}

//Mongoose
const orderSchema = new mongoose.Schema(
  {
    food: {
      type: String,
      unique: false,
      required: true,
    },
    customerId: {
      type: String,
      unique: false,
      required: true,
    },
    orderId: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
)

const Order = mongoose.model<IOrder>("Order", orderSchema)

export default Order
