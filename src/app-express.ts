const express = require("express")
import * as path from "path"

const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Welcome to the food finder!")
})

app.set("title", "Food finder")
app.set("view engine", "pug")
app.set("views", "./out/views")

app.use(express.static("public"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
