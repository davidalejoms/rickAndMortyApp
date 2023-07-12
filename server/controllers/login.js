const { User } = require("../src/models/DB_connection")

const login = async (req, res) => {
  try {
    const { user, password } = req.query
    console.log("user:", user)
    console.log("password:", password)
    if (user && password) {
      const loggedOk = await User.findOne({ where: { email: "davidalejoms@gmail.com" } })

      if (loggedOk) {
        res.status(200).json({ loginAccess: true })
      } else {
        res.status(404).send("Usuario no encontrado o contraseña incorrecta")
      }
    } else {
      res.status(400).send("Faltan Datos")
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
}
module.exports = login
