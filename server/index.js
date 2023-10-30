const express = require("express")
const PORT = "3001"
const mainRouter = require("./routes/")
const server = express()
const { conn } = require("./src/models/DB_connection")
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Origin", "https://rick-and-morty-app-sable-three.vercel.app/")
  res.header("Access-Control-Allow-Credentials", "true")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
  next()
})

server.use(express.json())
server.use("/rickandmorty", mainRouter)

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log("Server raised in port: " + PORT)
  })
})
/* .catch((error) => {
    throw Error("error de index:" + error.message)
  }) */

module.exports = server

/* const http = require('http')
const getCharById = require('./controllers/getCharById.js')
// const data = require('./utils/data.js')
// const allData = require('./utils/allData.js')
/* const PORT = '3001'
const HOST = 'localhost'
server = () => {
  http
    .createServer((req, res) => {
      console.log(`server running on ${HOST}:${PORT}`)
      res.setHeader('Access-Control-Allow-Origin', '*')
      const { url } = req
      if (url.includes('/rickandmorty/character')) {
        const id = url.split('/').at(-1)
        getCharById(res, id)
      }
    })
    .listen(PORT, HOST)
}

server()

exports = server */

/* const http = require("http")
const data = require("./utils/data.js")
const allData = require("./utils/allData.js")
const PORT = "3001"
const HOST = "localhost"


server = () => {
  http
    .createServer((req, res) => {
      console.log(`server running on ${HOST}:${PORT}`)
      res.setHeader("Access-Control-Allow-Origin", "*")
      const { url } = req
      if (url.includes("/rickandmorty/character")) {
        const paremeterId = url.split("/").at(-1)
        // buscar si el personaje esta cargado
        if (allData[paremeterId - 1]) {
          res.writeHead(200, { "Content-Type": "application/json" })
          res.end(JSON.stringify(allData[paremeterId - 1]))
        } else {
          res.writeHead(200, { "Content-Type": "application/json" })
          res.end(JSON.stringify([]))
        }
      }
    })
    .listen(PORT, HOST)
}

server()

exports = server 
 */
