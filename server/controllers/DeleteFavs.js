const { Favorite } = require("../src/models/DB_connection")

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params
    const toDeleteFav = await Favorite.findByPk(id)
    toDeleteFav && (await toDeleteFav.destroy())
    const allFav = await Favorite.findAll()
    res.status(200).json(allFav)
  } catch (error) {
    res.status(500).send(error.message)
  }
}
const clearAll = async (req, res) => {
  //   await UserFavorites.destroy({ truncate: true })
  await Favorite.destroy({ where: {} })
  res.status(200).json({ state: "cleared" })
}

module.exports = { deleteFav, clearAll }
