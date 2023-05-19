import React from "react"
import Card from "../Card/Card"
import style from "./Cards.module.css"

export default function Cards(props) {
  return (
    // <div  className={style.CardsContainer}>
    // <div  className="m-2 p-2 /* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 */ flex ">
    <div  className="m-2 p-2  flex flex-wrap flex-row-reverse justify-center ">
      
      {props.characters.map((character) => {
        return (
          <Card
            onClose={props.onClose}
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
          />
        )
      })}
    </div>
  )
}
