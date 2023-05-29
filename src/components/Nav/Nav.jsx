import React, { useEffect } from "react"
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link, useLocation } from "react-router-dom"
import AddRandom from "../AddRandom/AddRandom"
import LogOut from "../LogOut/LogOut"
import Clear from "../Clear/Clear"

export default function Nav(props) {
  return (
    <div
      className={
        props.location === "/" ? "hidden" : " w-full  bg-gray-900 bg-opacity-50 shadow-lg shadow-green-300 fixed top-0 left-0 z-10"
      }
    >
      <div className={"text-center flex justify-center gap-10 items-center  py-3"} id="titleWrapper">
        <span className="  text-gray-300 text-2xl">By David Mejia</span>
        <h1 className="    text-3xl text-white">Rick And Morty App</h1>
      </div>

      <div className=" mx-auto flex items-center justify-center  flex-wrap gap-6 text-white py-6 " id="navBar">
        <Link to="/Home">
          <i className="fa-solid fa-home mr-1"></i> Home
        </Link>
        <Link to="/About" element="About">
          <i className="fa-solid fa-user mr-1"></i>
          About
        </Link>
        <Link to="/favorites" element="Favorites">
          <i className="fa-solid fa-star mr-1"></i>
          My favs
        </Link>
        <AddRandom AddRandom={props.AddRandom} label="Random" />
        <AddRandom AddRandom={props.AddRandom} preload={props.preload} label="+12 Randomly" />
        <Clear clear={props.clear} label="Clear All" />
        <SearchBar onSearch={props.addWithId} AddRandom={props.AddRandom} logout={props.logout} />
        <br className=" hidden sm:block" />
        <LogOut logout={props.logout} />
      </div>
    </div>
  )
}
