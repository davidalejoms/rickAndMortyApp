import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import Card from "../Card/Card"

import { filterCards, orderCards } from "../../redux/actions"
export default function Favorites() {
  const favorites = useSelector((state) => state.myFavorites)
  const dispatcher = useDispatch()

  const [aux, setAux] = useState(false)

  useEffect(() => {
    setAux(false)
    //console.log(" ha cambiado y su valor es:", aux)
  }, [aux])

  const handlerOrder = (e) => {
    dispatcher(orderCards(e.target.value))
    document.getElementById("filter").value = "Default"
    setAux(true)
  }

  const handlerFilter = (e) => {
    dispatcher(filterCards(e.target.value))
  }
  return (
    <div>
      <div className="mx-auto w-full  text-center items-center flex flex-row justify-center flex-wrap gap-4 mt-3 " id="filters">
        <div className="flex flex-row gap-4 items-center">
          <p className="text-white font-semibold ">Order by:</p>
          <select className="rounded-full px-3 py-1 appearance-none" onChange={handlerOrder} name="" id="order">
            <option value="">Select Order</option>
            <option value="A">Ascendent</option>
            <option value="D">Descendent</option>
          </select>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <p className="text-white font-semibold ">Filter by:</p>
          <select className="rounded-full px-3 py-1 appearance-none" onChange={handlerFilter} name="" id="filter">
            <option value="Default">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      <div className="p-2  " id="cardsWrapper">
        {favorites.map((favorite) => {
          // console.log(favorite)
          return (
            <Card
              key={favorite.id}
              onClose={favorite.onClose}
              id={favorite.id}
              name={favorite.name}
              status={favorite.status}
              species={favorite.species}
              gender={favorite.gender}
              // origin={favorite.origin.name}
              image={favorite.image}
            />
          )
        })}
      </div>
    </div>
  )
}
