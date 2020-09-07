import express, { Request, Response } from "express"
import mongoose from "mongoose"

import FoodFinder, { getDrinks } from "./services/food-finder"
import models, { connectDb } from "./models"

const app = express()
const port = 4000

app.use(
  express.urlencoded({
    extended: true,
  })
)
let foodFinder = new FoodFinder()

app.get("/", (req, res) => {
  res.render("index")
})

app.get("/file", (req, res) => {
  res.render("index", {
    title: "I'm using pug!",
    message: "Wow this is what pug looks like. It's incredible.",
  })
})

app.get("/hello", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json")
  res.send({ "Hello there!": "I'm some Javascript" })
})

app.post("/search", (req: Request, res: Response) => {
  let searchedFood = foodFinder.findFood(req.body.food)

  if (searchedFood) {
    res.render("order", {
      title: "Your Order",
      item: searchedFood,
    })
  } else {
    res.send("food not found :(")
  }
})

app.set("title", "Food finder")

app.set("view engine", "pug")
app.set("views", "./out/views")

app.use(express.static("public"))

connectDb().then(async () => {
  getDrinks()
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})

let drinks = []
