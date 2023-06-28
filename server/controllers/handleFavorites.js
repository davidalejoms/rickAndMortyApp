let myFavorites = []

const postFav = (req, res) => {
  // console.log("entrado a post fav")
  const { id } = req.params

  Object.keys(req.body).length > 0 && myFavorites.push(req.body)
  res.status(200).json(myFavorites)
}

const deleteFav = (req, res) => {
  const { id } = req.params

  const filteredDeleted = myFavorites.filter((fav) => fav.id !== Number(id))

  myFavorites = filteredDeleted
  res.status(200).json(myFavorites)
}

const clearAll = (req, res) => {
  myFavorites = []
  res.status(200).json({ state: "cleared" })
}

module.exports = {
  postFav,
  deleteFav,
  clearAll,
}
