import React from "react"
import styles from "./AddRandom.module.css"
function AddRandom(props) {
  const randomHandler = () => {
    props.AddRandom()
  }
  return (

    <div  onClick={randomHandler} className="text-left" id="randomWrapper">
        <button className="bg-green-700 text-white px-6 py-2 inline-block rounded-full">Random</button>
      </div>
    
  )
}

export default AddRandom
