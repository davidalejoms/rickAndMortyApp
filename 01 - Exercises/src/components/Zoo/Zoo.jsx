import React, { useState, useEffect } from "react"
import Animals from "../Animals/Animals"
import Species from "../Species/Species"
import styledZoo from "./Zoo.module.css"

export default function Zoo() {
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    allAnimals: [],
    species: [],
  })

  const handleInputChange = (evento) => {
    setZoo({ ...zoo, zooName: evento.target.value })
  }
  const handleSpecies = (evento) => {
    if (zoo.animals.length === 5) zoo.allAnimals = zoo.animals
    zoo.animals = zoo.allAnimals
    setZoo({ ...zoo, animals: zoo.animals.filter((animalito) => animalito.specie === evento.target.value) })

    //!--------------------------------------------------- aqui voy
  }

  const handleAllSpecies = () => {
    setZoo({ ...zoo, animals: zoo.allAnimals })
  }
  React.useEffect(() => {
    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) => {
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        })
        //  console.log("animals:", animals)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className={styledZoo.divContent}>
      <div className={styledZoo.divContentTitle}>

      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange} type="text" />
      <h1 className={styledZoo.title}>{zoo.zooName}</h1>
      </div>
      
      <Species species={zoo.species} handleSpecies={handleSpecies} handleAllSpecies={handleAllSpecies} />
      <Animals animals={zoo.animals} />
    </div>
  )
}
