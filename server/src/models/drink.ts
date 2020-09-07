import mongoose from "mongoose"

const drinkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    price: {
      type: Number,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
)

const Drink = mongoose.model("Drink", drinkSchema)

export default Drink
