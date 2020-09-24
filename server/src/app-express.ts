import express, { Request, Response } from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import OrderService from "./services/order-service"
import cors from "cors"
import FoodFinder from "./services/food-finder"
import models, { connectDb } from "./models"

const schema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
)

const app = express()
app.use(bodyParser.json())
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

const port = 4000

app.use(
  express.urlencoded({
    extended: true,
  })
)
let foodFinder

app.get("/menu", (req, res) => {
  res.setHeader("Content-Type", "application/json")
  res.setHeader("Acesss-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  res.send(foodFinder.menu)
})

app.post("/order", (req, res) => {
  const order = new OrderService()
  order
    .createOrder(req.body.customerId, req.body.food)
    .then(() => res.sendStatus(201))
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
  foodFinder = new FoodFinder()

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})
