const { Favorite } = require("../src/models/DB_connection")

const postFav = async (req, res) => {
  try {
    const { id, name, origin, status, image, species, gender } = req.body
    //console.log({ id, name, origin, status, image, species, gender })
    if (name && origin && status && image && species && gender) {
      await Favorite.create({ id, name, origin, status, image, species, gender })
      const allFav = await Favorite.findAll()
      res.status(200).json(allFav)
    } else {
      res.status(400).send("Faltan Datos")
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}
module.exports = postFav
