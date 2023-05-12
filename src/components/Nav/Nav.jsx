import React from "react"
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"
import AddRandom from '../AddRandom/AddRandom'
export default function Nav(props) {
  return (
    <div className={style.navigation}>
      <h1>Rick And Morty</h1>
      <h5>By David Mejia</h5>
      <SearchBar onSearch={props.addWithId} />
      <AddRandom AddRandom={props.AddRandom}/>
    </div>
  )
}
