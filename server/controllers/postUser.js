const { Op } = require("sequelize")
const { User } = require("../src/models/DB_connection")

const postUser = async (req, res) => {
  const { user, password } = req.body
  if (user && password) {
    try {
      const result = await User.findOne({ where: { [Op.and]: [{ email: user }, { password: password }] } })
      console.log("result:", result)
      if (!result) {
        await User.create({ email: user, password: password })
        res.status(200).send("Creado con exito para el usuario: " + user)
      }
    } catch (error) {
      res.status(400).send(error.message)
    }
  } else {
    res.status(400).send("Faltan Datos")
  }
}
module.exports = postUser
