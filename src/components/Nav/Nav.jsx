import React from "react"
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom"

export default function Nav(props) {
  return (
    <div className=" w-full  bg-gray-200">
      <div className=" max-w-6xl mx-auto lg:grid lg:grid-cols-2 items-center" id="navBar">
        <div className="  mx-auto  " id="headerWrapper">
          <div className="text-center lg:grid  lg:grid-cols-2 mr-2 " id="titleWrapper">
            <h1 className="   Text-blue-900 text-3xl text-green-800">Rick And Morty App</h1>
            <span className="  text-2xl">By David Mejia</span>
            <div id="linksWrapper" className="flex align-middle justify-center max-w-2xl m-auto">
              <div className="mx-3 bg-green-700 text-white px-6 py-2 inline-block rounded-full">
                <Link to="/Home">Home</Link>
              </div>
              <div className="mx-3 bg-green-700 text-white px-6 py-2 inline-block rounded-full">
                <Link to="/About" element="About">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>

        <SearchBar onSearch={props.addWithId} AddRandom={props.AddRandom} />
      </div>
      
    </div>
  )
}
