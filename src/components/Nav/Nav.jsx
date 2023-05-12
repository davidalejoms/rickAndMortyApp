import React from "react"
import style from "./Nav.module.css"
import SearchBar from "../SearchBar/SearchBar"

export default function Nav(props) {
  return (
    <div className={style.navigation}>
      <h1>Rick And Morty</h1>
      <h5>By David Mejia</h5>
      <SearchBar onSearch={props.addNew} />
    </div>
  )
}
