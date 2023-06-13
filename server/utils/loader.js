const axios = require("axios")
const fs = require("fs")

const characters = []
const delay = 300

// Función para hacer la solicitud con retardo
function makeRequestWithDelay(i) {
  setTimeout(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${i}`)
      .then((res) => {
        characters.push(res.data)

        // Verificar si se han obtenido todos los personajes
        if (characters.length === 826) {
          // Convertir el array a una cadena JSON
          const charactersJSON = JSON.stringify(characters)

          // Escribir la cadena JSON en el archivo allData.js
          fs.writeFile("allData.js", `const allData = ${charactersJSON}`, (err) => {
            if (err) {
              console.error("Error al escribir el archivo:", err)
            } else {
              console.log("Datos guardados en allData.js")
            }
          })
        }
      })
      .catch((err) => {
        console.error("Error al obtener datos de la API:", err)
      })
    console.log("going on -> ", i, " id")
  }, delay * i)
}

// hacer fetch a la API de Rick and Morty con retardo
for (let i = 1; i <= 826; i++) {
  makeRequestWithDelay(i)
}
