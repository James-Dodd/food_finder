import mongoose from "mongoose"

import Drink from "./drink"
import Food from "./food"

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/food-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

const models = { Drink, Food }

export { connectDb }

export default models
