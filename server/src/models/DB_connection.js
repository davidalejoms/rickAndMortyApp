require("dotenv").config()

const { Sequelize } = require("sequelize")
const FavoriteModel = require("./Favorite")
const UserModel = require("./User")

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.
const { DBSTRING } = process.env
const URL = DBSTRING
// const URL = "postgres://default:iy5TpOoRLq0K@ep-nameless-leaf-900270.us-east-1.postgres.vercel-storage.com:5432/verceldb"

const sequelize = new Sequelize(URL, {
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Solo si tu certificado SSL no es de confianza
    },
  },
})

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize)
//
UserModel(sequelize)
//

const { User, Favorite } = sequelize.models
User.belongsToMany(Favorite, { through: "UserFavorites", onDelete: "CASCADE" })
Favorite.belongsToMany(User, { through: "UserFavorites", onDelete: "CASCADE" })
//User.create({ email: "davidalejoms@gmail.com", password: "PASShenry2" })

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
