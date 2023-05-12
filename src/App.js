import React from "react"
import axios from "axios"
import { useState } from "react"
import "./App.css"
import Card from "./components/Card/Card.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Nav from "./components/Nav/Nav"
// import characters, { Rick } from "./data.js"

function App() {
  const [characters, setCharacters] = React.useState([])

  function onSearch(id) {
    console.info("entro y el id es: ", id.length)
    if (id.length === 0) return 0
    if (id > 826){
      alert('solo hay 826 personajes, no se puede solicitar mas que eso')
      return 0
    } 
    console.info(" hayquery", id.length)

    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data])
        } else {
          window.alert("¡No hay personajes con este ID!")
        }
      })
      .catch((error) => {
        console.error("Error al obtener el personaje:", error)
       // window.alert("Ocurrió un error al obtener el personaje.")
      })
  }
  return (
    <div className="App">
      <Nav addWithId={onSearch} />

      <Cards characters={characters} />
    </div>
  )
}

export default App
/* const onSearch = (id) => {
  const rick = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }
  setCharacters([...characters, rick])
} */
