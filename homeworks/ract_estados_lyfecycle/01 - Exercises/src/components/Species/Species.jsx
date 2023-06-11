import React from "react"
import styledSpecies from "./Species.module.css"

export default function Species({ species, handleSpecies, handleAllSpecies }) {
  return (
    <div>
      <h2 className={styledSpecies.divContentTItle}>Species</h2>
      <div className={styledSpecies.divContent}>
        {species.map((especie) => {
          return (
            <button key={especie} onClick={handleSpecies} value={especie}>
              {especie}
            </button>
          )
        })}
        <button onClick={handleAllSpecies}>All Animals</button>
      </div>
    </div>
  )
}
