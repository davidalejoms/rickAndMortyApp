import React from 'react'

export default function Clear(props) {

    return (
    <div  onClick={()=>{props.clear()} } className="text-center" id="randomWrapper">
        <button ><i className="fa-solid fa-trash mr-1"></i>{props.label}</button>
      </div>
  )
}
