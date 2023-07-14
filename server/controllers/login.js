const { Op } = require("sequelize")
const { User } = require("../src/models/DB_connection")

const login = async (req, res) => {
  const { user, password } = req.query
  try {
    if (!user || !password) {
      return res.status(400).json({ rejected: "faltan datos para login" })
    }
    const loggedOk = await User.findOne({ where: { [Op.and]: [{ email: user }, { password: password }] } })

    if (loggedOk) {
      res.status(200).json({ loginAccess: true })
    } else {
      res.status(200).json({ loginAccess: false })
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).send(error.message)
  }
}
module.exports = login
