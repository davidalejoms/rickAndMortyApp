import React, { useEffect, useState } from "react"
import axios from "axios"

import Wither from "./components/Wither/Wither"
import Nav from "./components/Nav/Nav"
import Cards from "./components/Cards/Cards.jsx"
import AlertBar from "./components/AlertBar/Alertbar"
import About from "./components/About/About"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Detail from "./components/Detail/Detail"
import NotFound from "./components/NotFound/NotFound"
import Login from "./components/Login/Login"
import Favorites from "./components/Favorites/Favorites"

function App() {
  const [characters, setCharacters] = React.useState([])
  const [warning, setWarning] = React.useState("")

  function onSearch(id) {
    if (id.length === 0) {
      setWarning("")
      setWarning(`Ingresa un Id entre 0 y 826`)
      return 0
    }
    if (id > 826) {
      setWarning(`El personaje con id ${id} no existe, solo hay 826 personajes`)
      return 0
    }
    if (characters.some((char) => char.id === parseInt(id))) {
      //advertencia que ya se ingreso un personaje con ese id
      setWarning(`El personaje con id ${id} ya se ingresó intenta con otro`)
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
    for (let i = 0; i < q; i++) {
      Random()
    }
  }

  useEffect(() => {
    // preload()
  }, [characters])

  const location = useLocation()

  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const EMAIL = "davidalejoms@gmail.com"
  const PASSWORD = "PASShenry2"

  useEffect(() => {
    !access && navigate("/")
    // console.info("access: ->", access)
  }, [access])

  function login(userData) {


    if (userData.password === PASSWORD && userData.user === EMAIL) {
      setAccess(true)
      navigate("/home")
    }
  }
  useEffect(() => {
    !access && navigate("/")
  }, [access])

  const logout = () => {
    console.info("entrando bien")
    console.info("el estado de access es:", access)
    navigate("/")
  }

  return (
    <div className="App">
      {/* <Wither /> */}
      <Nav addWithId={onSearch} AddRandom={Random} location={location.pathname} logout={logout} preload={preload} />
      <AlertBar warning={warning} />
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route path="/home" element={<Cards onClose={onClose} characters={characters} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
