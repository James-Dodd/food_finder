import mongoose from "mongoose"

import Drink from "./drink"

const connectDb = () => {
  return mongoose.connect("mongodb://localhost:27017/food-app", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

const models = { Drink }

export { connectDb }

export default models
