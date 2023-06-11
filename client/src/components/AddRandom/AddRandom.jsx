import React from "react"
function AddRandom(props) {
  const randomHandler = () => {
  if (props.preload){
    props.preload(12)
  }else
  props.AddRandom()
  }
  return (

    <div  onClick={randomHandler} className="text-center" id="randomWrapper">
        <button ><i className="fa-solid fa-random mr-1"></i>{props.label}</button>
      </div>
    
  )
}

export default AddRandom
