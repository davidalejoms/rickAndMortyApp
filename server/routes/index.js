const express = require("express")
const { Router } = require("express")
const login = require("../controllers/login")
const getCharById = require("../controllers/getCharById")
const { postFav, deleteFav, clearAll } = require("../controllers/handleFavorites")
const mainRouter = Router()

mainRouter.get("/", (req, res) => {
  res.status(200).json({ message: "todo OK en la ruta / " })
  console.log("/")
})

mainRouter.use("/login", login)
mainRouter.use("/character/:id", getCharById)
mainRouter.use("/fav/:id", deleteFav)
mainRouter.use("/clear", clearAll)
mainRouter.use("/fav", postFav)
module.exports = mainRouter
