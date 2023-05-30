import React, { useEffect, useLayoutEffect, useState } from "react"
import SearchBar from "../SearchBar/SearchBar"
import { Link, useNavigate, useLocation } from "react-router-dom"
import AddRandom from "../AddRandom/AddRandom"
import LogOut from "../LogOut/LogOut"
import Clear from "../Clear/Clear"
import { useSelector } from "react-redux"

export default function Nav(props) {
  //accesibilidad
  const location = useLocation() //PARA RECOGER UBICACION
  const initial = { home: true, about: true, favorites: true, random: true, random12: true, clear: true, searchBar: true }
  const myFavorites = useSelector((state) => state.myFavorites) //para acceder a favoritos
  const [permissionStatus, setPermission] = useState(initial)
  

  const perrmissions = () => {
    switch (location.pathname) {
      case "/home":
        return setPermission(initial)
      case "/about":
        return setPermission({ ...permissionStatus, random: false, random12: false, clear: false, searchBar: false })
      case "/favorites":
        return setPermission({ ...permissionStatus, random: false, random12: false, clear: true, searchBar: false })
      default:
        return initial
    }
  }

   useEffect(() => perrmissions(),[location] )


  const navigate1 = useNavigate()
  useEffect(() => {
    if (myFavorites.length === 0) {
      navigate1("/home")
    }
  }, [myFavorites])

  return (
    <div
      className={
        props.location === "/" ? "hidden" : " w-full  bg-gray-900 bg-opacity-90 shadow-lg shadow-green-300 fixed top-0 left-0 z-10"
      }
    >
      <div className={"text-center flex justify-center gap-10 items-center  py-3"} id="titleWrapper">
        <span className="  text-gray-300 text-2xl">By David Mejia</span>
        <h1 className="    text-3xl text-white">Rick And Morty App</h1>
      </div>

      <div className=" mx-auto flex items-center justify-center  flex-wrap gap-6 text-white py-6 " id="navBar">
        <Link to="/home">
          <i className="fa-solid fa-home mr-1"></i> App
        </Link>
        <Link to="/about" element="About">
          <i className="fa-solid fa-user mr-1"></i>
          About
        </Link>

        <div className={myFavorites.length === 0 ? "hidden" : "block"}>
          <Link to="/favorites" element="Favorites">
            <i className="fa-solid fa-star mr-1"></i>
            My favs
          </Link>
        </div>
        <div className={!permissionStatus.random ? "hidden" : "block"}>
          <AddRandom AddRandom={props.AddRandom} label="Random" />
        </div>
        <div className={!permissionStatus.random12 ? "hidden" : "block"}>
          <AddRandom AddRandom={props.AddRandom} preload={props.preload} label="+12 Randomly" />
        </div>
        <div className={!permissionStatus.clear ? "hidden" : "block"}>
          <Clear clear={props.clear} label="Clear All" />
        </div>

        <div className={!permissionStatus.searchBar ? "hidden" : "block"}>
          <SearchBar onSearch={props.addWithId} AddRandom={props.AddRandom} logout={props.logout} />
        </div>
        <br className=" hidden sm:block" />
        <LogOut logout={props.logout} />
      </div>
    </div>
  )
}
