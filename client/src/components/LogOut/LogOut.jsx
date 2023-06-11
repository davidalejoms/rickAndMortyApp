import React from "react"
import styles from "./LogOut.module.css"
function LogOut(props) {

  
 
  return (

    <div  onClick={props.logout} className="text-left" id="loginWrapper">
        <button ><i className="fa-solid fa-right-from-bracket mr-2"></i>Salir</button>
      </div>
    
  )
}

export default LogOut
