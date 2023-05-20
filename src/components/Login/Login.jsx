import React, { useState } from "react"
import logo from "./login-randm.png"
import validate from "./validations"
// eslint-disable-next-line

export default function Contact() {
  const [userData, setInputs] = React.useState({
    user: "",
    password: "",
  })
  
  const [errors, setErrors] = React.useState({
    user: "",
    password: "",
  })
  
  
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    
    setInputs({ ...userData, [name]: value })
    setErrors(validate({ ...userData, [name]: value }))
  }
  
  const handleSubmit = (evento) => {
    evento.preventDefault()
    if (Object.values(errors).length === 0) {
      alert("Datos completos")
      setInputs({})
      setErrors({})
    } else alert("Debe llenar todos los campos")
  }
  
  
  
  return (
    <div className="m-25 mt-20 max-w-sm mx-auto bg-green-700 border-4 border-green-300  rounded-xl">
      <img className="mt-4 w-[60%] mx-auto" src={logo} />
      <form className=" p-4 flex flex-col mt-10 border-4 border-green-300 rounded-xl " onSubmit={handleSubmit}>
        <div className="flex flex-col  justify-center mt-4  relative">
          <label className="text-[1.25rem] text-slate-50" htmlFor="password">
            Correo Electrónico:
          </label>
          <p
            className={
              errors.password && "text-sm block text-center text-red-900 w-[90%] mx-auto absolute top-16 -right-1  bg-orange-300 rounded-lg "
            }
          >
            {errors.password}
          </p>
          <input
            className=" px-3 py-1 w-[90%] rounded-full mx-auto  text-gray-900 text-[1.25rem]  "
            name="password"
            type="pasword"
            value={userData.password}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col  justify-center mt-4 relative">
          <label className="text-[1.25rem]  text-slate-50" htmlFor="Nombre">
            Contraseña:
          </label>
          <p
            className={
              errors.user && " text-sm block text-center text-red-900 w-[100%] mx-auto absolute top-16 right-1  bg-orange-300 rounded-lg "
            }
          >
            {errors.user}
          </p>
          <input
            className=" px-3 py-1 w-[90%] rounded-full mx-auto  text-gray-900 text-[1.25rem]  "
            name="user"
            type="password"
            value={userData.user}
            onChange={handleChange}
          />
        </div>

        <div className="flex  flex-end items-center justify-end mt-4">
          <button
            className=" text-center text-gray-200 mx-auto mt-4 py-2 rounded-full px-24  border-2 border-slate-50 hover:bg-slate-50 hover:text-gray-900"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
