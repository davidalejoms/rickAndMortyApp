import React, { useState } from "react"
import * as actions from "../../redux/actions/actions"
import { useDispatch /* , useSelector  */ } from "react-redux"
// const estado = useSelector((state) => state)
// console.log("estado:", estado)

const ContactUs = () => {
  const [state, setState] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  })
  const handleInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    setState({ ...state, [name]: value })
  }
  const dispatcher = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatcher(actions.enviarForm(state))
  }

  return (
    <div>
      <form className="contactBg">
        <label htmlFor="nombre">Nombre: </label>
        <input onChange={handleInput} name="nombre" />
        <label htmlFor="email">Email: </label>
        <input onChange={handleInput} name="email" />
        <label htmlFor="asunto">Asunto: </label>
        <input onChange={handleInput} name="asunto" />
        <label htmlFor="mensaje">Mensaje: </label>
        <input onChange={handleInput} name="mensaje" />
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  )
}

export default ContactUs
