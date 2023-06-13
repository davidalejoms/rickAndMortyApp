const http = require('http')
const getCharById = require('./controllers/getCharById.js')
// const data = require('./utils/data.js')
// const allData = require('./utils/allData.js')
const PORT = '3001'
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

exports = server

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

exports = server */
