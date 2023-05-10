import React from "react"
import Card from "../Card/Card"
import style from "./Cards.module.css"

export default function Cards(props) {
  return (
    <div className={style.CardsContainer}>
      {props.characters.map((character) => {
        return (
          <Card
            key={character.id}
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
