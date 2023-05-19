import axios from "axios"
import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

/* tukis================================================== */
const Status=(props)=>{
    if (props.vivito === "Dead")
    return (<div className="absolute ml-5 mb-5    text-4xl fa-solid   fa-skull-crossbones     text-red-600 opacity-80 bg-slate-50 p-4 rounded-xl"></div>)

    if (props.vivito === "Alive")
    return (<div className="absolute ml-5 mb-5   text-4xl fa-solid  fa-face-smile     text-green-600 opacity-80 bg-slate-50 p-4 rounded-xl"></div>)

    if (props.vivito === "unknown")
    return (<div className="absolute ml-5 mb-5 text-4xl fa-solid    fa-question     text-blue-600 opacity-80 bg-slate-50 p-4 rounded-xl"></div>)
}
/* tukis================================================== */



export default  function Detail() {
  const [character, setCharacter] = useState([])
  const { id } = useParams()
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        // return setCharacter(data)
        setCharacter({
          image: data.image,
          name: data.name,
          status: data.status,
          species: data.species,
          gender: data.gender,
          origin: data.origin.name,
        })
        // return setTimeout(setCharacter(data), 1500)
      } else {
        window.alert("No hay personajes con ese ID")
      }
    })
    return setCharacter({})
  }, [id])

  return (
    <div key={character.id} className=" bg-gray-300 m-2 rounded-3xl grid grid-cols-2 opacity-95 " id="Card">
     
      <div className="flex items-end justify-items-end" id="containerImage">
        <img className="min-h-full rounded-l-3xl p-3 object-cover object-center  " src={character.image} alt="" />
       {/*=========================================  */}
        <Status  vivito={character.status} />
       {/*=========================================  */}
      </div>
      <div className="relative p-4" id="DescriptionContainer">
        <h2 className="text-stone-700 text-xl text-center mt-5 leading-none my-5 ">
          Name <br />
          <strong className=" text-3xl text-stone-900">{character.name}</strong> <br />
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Status:
          <strong className=" text-stone-900 ml-2">{character.status}</strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Species:
          <strong className=" text-stone-900 ml-2"> {character.species} </strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Gender:
          <strong className=" text-stone-900 ml-2">{character.gender} </strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left my-3leading-none ">
          Origin:
          <strong className=" text-stone-900 ml-2">{character.origin}</strong>
        </h2>
        {/*
    */}
      </div>
    </div>
  )
}



/*     
    <div key={character.id} className=" bg-gray-300 m-2 rounded-3xl grid grid-cols-2 opacity-95 " id="Card">
        <div className="flex items-end justify-items-end" id="containerImage">
        <img className="min-h-full rounded-l-3xl p-3 object-cover object-center  " src={character.image} alt=" />

      </div>
      <div className="relative p-4" id="DescriptionContainer">
        <h2  className="text-stone-700 text-xl text-center mt-5 leading-none my-5 ">
          Name <br />
          <strong className=" text-3xl text-stone-900">{character.name}</strong> <br />
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Status:
          <strong className=" text-stone-900 ml-2">{character.status}</strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Species:
          <strong className=" text-stone-900 ml-2"> {character.species} </strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Gender:
          <strong className=" text-stone-900 ml-2">{character.gender} </strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left my-3leading-none ">
          Origin:
          <strong className=" text-stone-900 ml-2">{character.origin}</strong>
        </h2>
       </div>
       </div>
    */
