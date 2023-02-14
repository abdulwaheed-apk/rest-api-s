const express = require("express")
const mongoose = require("mongoose")
const app = express()
const usersRouter = require("./routes/users")

app.get("/", (req, res) => {
  res.send("Hello B")
})

mongoose
  .connect("mongodb://127.0.0.1:27017/users-app", {
    useNewUrlParser: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err))

app.use(express.json({ extended: false }))

app.use("/users", usersRouter)

app.listen(3000, () => {
  console.log("server Started")
})
