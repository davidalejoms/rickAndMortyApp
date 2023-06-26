const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
  const { id } = req.params

  axios
    .get(`${URL}${id}`)
    .then((response) => response.data)
    .then((data) => {
      if (Object.keys(data).length > 0) {
        const { id, status, name, species, origin = origin.name, image, gender } = data
        const myChar = {
          id,
          status,
          name,
          species,
          origin,
          image,
          gender,
        }

        res.status(200).json(myChar)
      } else {
        res.status(400).send("not found")
      }
    })
    .catch((error) => {
      error.message
    })
}
module.exports = getCharById

/* const axios = require('axios')
const http = require('http')

const getCharById = (res, id) => {
  const URL = `https://rickandmortyapi.com/api/character/${id}`
  const mychar = {}
  axios(URL)
    .then(({ data }) => {
      mychar.id = id
      mychar.name = data.name
      mychar.status = data.status
      mychar.species = data.species
      mychar.gender = data.gender
      mychar.origin = data.origin.name
      mychar.image = data.image
      //   console.log(mychar)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(mychar))
    })
    .catch((reason) => {
      res.writeHead(500, { 'Content-Type': 'text/plain' })
      res.end(reason.message)
    })
}

module.exports = getCharById */
