import React from "react"
import axios from "axios"
import { useState } from "react"
import "./App.css"
// import Card from "./components/Card/Card.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Nav from "./components/Nav/Nav"
// import characters, { Rick } from "./data.js"

function App() {
  const [characters, setCharacters] = React.useState([])

  function onSearch(id) {
    if (id.length === 0) return 0
    if (id > 826) return 0
    if (characters.some((char) => char.id === parseInt(id))) return 0

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
  const onClose = (id) => {
    console.log("antes de cerrar:", characters)
    setCharacters(characters.filter((cartoon) => cartoon.id !== parseInt(id)))
    setTimeout(console.log("despues de cerrar:", characters), 300)
  }
  return (
    <div className="App">
      <Nav addWithId={onSearch} />

      <Cards onClose={onClose} characters={characters} />
    </div>
  )
}

export default App
