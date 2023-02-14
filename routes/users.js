const express = require("express")

const router = express.Router()
const User = require("../models/user")

// Getting All Users
router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Post Single
router.post("/", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
    })
    const user = await newUser.save()
    res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send("Server Error")
  }
})

// Get By ID
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (error) {
    console.err(error.message)
    res.status(400).send("User Not Found")
  }
})

// Remove By ID
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    await user.remove()
    res.json({ message: "User Removed" })
  } catch (error) {
    console.error(error.message)
  }
})

// Update By ID

module.exports = router
