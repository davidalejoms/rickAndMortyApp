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
//=============================================================
import axios from "axios"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const REMOVE_ALL = "REMOVE_ALL"
export const FILTER = "FILTER"
export const ORDER = "ORDER "
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav"
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      })
    })
  }
}
// export const addFav = (char) => {
//   console.info(char)
//   return { type: ADD_FAV, payload: char }
// }
export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      })
    })
  }
}
export const removeAll = () => {
  const endpoint = `http://localhost:3001/rickandmorty/clear`
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_ALL,
        payload: data,
      })
    })
  }
}

// export const removeFav = (id) => {
//   return { type: REMOVE_FAV, payload: id }
// }
export const filterCards = (anything) => {
  return { type: FILTER, payload: anything }
}
export const orderCards = (anything) => {
  return { type: ORDER, payload: anything }
}
//===============================================//!APP/ /=================
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
import { removeAll } from "./redux/actions"

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
      .get(`http://localhost:3001/rickandmorty/character/${id}`)
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
  // const EMAIL = "davidalejoms@gmail.com"
  // const PASSWORD = "PASShenry2"

  // function login(userData) {
  //   if (userData.password === PASSWORD && userData.user === EMAIL) {
  //     setAccess(true)
  //     navigate("/home")
  //     localStorage.setItem("session", true) //!=========================================================
  //   } else {
  //     alert("revise sus credenciales, Acceso denegado")
  //   }
  // }
  function login(userData) {
    const { user, password } = userData
    const URL = "http://localhost:3001/rickandmorty/login/"
    axios(URL + `?user=${user}&password=${password}`).then(({ data }) => {
      const { loginAccess } = data
      setAccess(loginAccess)

      access && navigate("/home")
    })
  }

  const logout = () => {
    setAccess(false)
    localStorage.setItem("session", false) //!=========================================================
    navigate("/")
  }

  useEffect(() => {
    !access && navigate("/")
  }, [access, navigate])

  const dispatcher = useDispatch()
  const clear = () => {
    setCharacters([])
    dispatcher(removeAll())
  }

  return (
    <div className="App">
      {/* <Wither /> */}
      <Nav
        addWithId={onSearch}
        AddRandom={Random}
        location={location.pathname}
        logout={logout}
        preload={preload}
        clear={clear}
        characters={characters}
      />
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
