import React, { useEffect, useState } from "react"
import axios from "axios"

// import Wither from "./components/Wither/Wither"
import Nav from "./components/Nav/Nav"
import Cards from "./components/Cards/Cards.jsx"
import AlertBar from "./components/AlertBar/Alertbar"
import About from "./components/About/About"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Detail from "./components/Detail/Detail"
import NotFound from "./components/NotFound/NotFound"
import Login from "./components/Login/Login"
import Favorites from "./components/Favorites/Favorites"
import { useDispatch } from "react-redux"
import { removeFav } from "./redux/actions"

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
          setCharacters((oldChars) => [data, ...oldChars]) // ESTADO LOCAL
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
    //compara lo que llega con el estado, si existe volver a llamar
    const uniquer = () => {
      let randomInt = Math.floor(Math.random() * 826) + 1
      if (characters.some((char) => char.id === randomInt)) {
        return uniquer()
      } else {
        return randomInt
      }
    }
    onSearch(uniquer())
  }
  /* 
meter 6 para ir mirando inicio
*/
  const preload = (q) => {
    for (let i = 0; i < q; i++) {
      Random()
    }
  }

  const location = useLocation()

  const navigate = useNavigate()
  const [access, setAccess] = useState(false)
  const EMAIL = "davidalejoms@gmail.com"
  const PASSWORD = "PASShenry2"

  function login(userData) {
    if (userData.password === PASSWORD && userData.user === EMAIL) {
      setAccess(true)
      navigate("/home")
      localStorage.setItem("session", true) //!=========================================================
    } else {
      alert("revise sus credenciales, Acceso denegado")
    }
  }

  const logout = () => {
    setAccess(false)
    localStorage.setItem("session", false) //!=========================================================
    navigate("/")
  }

  // useEffect(() => {

  //   //setAccess(!access)
  // }, [])

  useEffect(() => {
    const session = localStorage.getItem("session").valueOf()
    !access && navigate("/")
    if (session === "true") console.log("si")
    else if (session === "false") navigate("/")
  }, [access, navigate])

  const dispatcher = useDispatch()
  const clear = () => {
    setCharacters([])
    dispatcher(removeFav("all"))
  }
  // if (access === false) return 0
  return (
    <div className="App">
      {/* <Wither /> */}
      <Nav addWithId={onSearch} AddRandom={Random} location={location.pathname} logout={logout} preload={preload} clear={clear} />
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
