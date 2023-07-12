require("dotenv").config()

const { Sequelize } = require("sequelize")
const FavoriteModel = require("./Favorite")
const UserModel = require("./User")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
const { USERNAME, PASSWORD, HOST, PORT, DB } = process.env
const URL = `postgres://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DB}`

const sequelize = new Sequelize(URL, { logging: false, native: false })

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize)
//
UserModel(sequelize)
//

const { User, Favorite } = sequelize.models
User.belongsToMany(Favorite, { through: "UserFavorites", onDelete: "CASCADE" })
Favorite.belongsToMany(User, { through: "UserFavorites", onDelete: "CASCADE" })

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
// const { UserFavorites } = sequelize.models

// const finder = async () => {
//   const findOne = await User.findOne({ where: { email: "davidalejoms@gmail.com" } })
//   console.log("=========================================valor del findOne:", findOne)
// }
// finder()
module.exports = {
  User,
  Favorite,
  // UserFavorites,
  conn: sequelize,
}
