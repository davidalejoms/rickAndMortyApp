import React, { useEffect } from "react"
import axios from "axios"
import "./App.css"
import Wither from "./components/Wither/Wither"
import Nav from "./components/Nav/Nav"
import Cards from "./components/Cards/Cards.jsx"
import AlertBar from "./components/AlertBar/Alertbar"
import About from "./components/About/About"
import { Route, Routes } from "react-router-dom"
import Detail from "./components/Detail/Detail"
import NotFound from "./components/NotFound/NotFound"

function App() {
  const [characters, setCharacters] = React.useState([])
  const [warning, setWarning] = React.useState("")

  function onSearch(id) {
    if (id.length === 0) {
      setWarning("")
      setWarning(`ingrese un Id entre 0 y 826`)
      return 0
    }
    if (id > 826) {
      setWarning(`el personaje con id ${id} no existe, solo hay 826 personajes`)
      return 0
    }
    if (characters.some((char) => char.id === parseInt(id))) {
      //advertencia que ya se ingreso un personaje con ese id
      setWarning(`el personaje con id ${id} ya se ingresó intente con otro`)
      return 0
    }
    setWarning("")

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
    setCharacters(characters.filter((cartoon) => cartoon.id !== parseInt(id)))
  }
  const Random = () => {
    onSearch(Math.floor(Math.random() * 826) + 1)
  }
  /* 
meter 6 para ir mirando inicio
*/
  const preload = (q) => {
    if (characters.length < q) {
      // setTimeout(Random(),3800)
      Random()
    }
  }
  useEffect(() => {
    preload(10)
  }, [characters])

  /*
    meter 6 para ir mirando fin
    */

  return (
    <div className="App">
      {/* <Wither /> */}
      <Nav addWithId={onSearch} AddRandom={Random} />
      <AlertBar warning={warning} />
      <Routes>
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
