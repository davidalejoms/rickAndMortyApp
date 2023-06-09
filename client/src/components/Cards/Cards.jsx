import React from "react"
import Card from "../Card/Card"

export default function Cards(props) {
  return (
    // <div  className={style.CardsContainer}>
    // <div  className="m-2 p-2 /* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 */ flex ">

    <div className="">
      {/* <div className=" p-2  flex flex-wrap flex-auto justify-left w-full" id="cardsWrapper"> */}
      <div className=" pt-4 px-3    " id="cardsWrapper">
        {props.characters.map((character) => {
          return (
            <Card
              key={character.id}
              onClose={props.onClose}
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
    </div>
  )
}
