// const express = require("express")
const cors = require("cors")
const { Router } = require("express")
const login = require("../controllers/login")
const getCharById = require("../controllers/getCharById")
const { deleteFav, clearAll } = require("../controllers/DeleteFavs")
const postFav = require("../controllers/postFav")
const postUser = require("../controllers/postUser")
// const { postFav, deleteFav, clearAll } = require("../controllers/handleFavorites")
const mainRouter = Router()

//Seteamos headers para la respuesta que le enviamos al cliente
mainRouter.use(cors())

mainRouter.get("/", (req, res) => {
  res.status(200).json({ message: "todo OK en la ruta / " })
  console.log("/")
})

mainRouter.get("/login", login)
mainRouter.post("/login", postUser)
mainRouter.get("/character/:id", getCharById)
mainRouter.delete("/fav/:id", deleteFav)
mainRouter.use("/clear", clearAll)
mainRouter.use("/fav", postFav)
module.exports = mainRouter
