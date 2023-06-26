const { query } = require("express")
const users = require("../utils/users")

const login = (req, res) => {
  userArray = req.query
  if (users[0].user === userArray.user && userArray.password == userArray.password) {
    res.status(200).json({ loginAccess: true })
    console.log("entro a la app")
  } else {
    console.log("negado a la app")
    res.status(200).json({ loginAccess: false })
  }
}
module.exports = login
