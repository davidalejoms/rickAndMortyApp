import React from "react"
import { useState } from "react"
import "./App.css"
import Card from "./components/Card/Card.jsx"
import Cards from "./components/Cards/Cards.jsx"
import Nav from "./components/Nav/Nav"
// import characters, { Rick } from "./data.js"

function App() {
  const [characters, setCharacters] = React.useState([])

  const onSearch = (id) => {
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
  }
  return (
    <div className="App">
      <Nav addNew={onSearch} />

      <Cards characters={characters} />
    </div>
  )
}

export default App
