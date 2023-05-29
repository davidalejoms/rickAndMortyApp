import React, { useEffect, useState } from "react"
import logo from "./login-randm.png"
import validate from "./validations"
import { useNavigate } from "react-router-dom"
// eslint-disable-next-line

export default function Login(props) {
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
    // console.info('en handle submit',errors)

    if (Object.values(errors).length === 0) {
      props.login(userData)
      // alert("Datos completos")
      // setInputs({})
      // setErrors({})
    } else alert("Debe llenar todos los campos")
  }

  return (
    <div className="pt-6">
      <div  className="  max-w-sm mx-auto bg-gray-900 bg-opacity-70
    rounded-xl">
        <img className=" w-[80%] mx-auto py-4" src={logo} />
        <form className=" p-4 flex flex-col mt-10  border-t-[4px] border-gray-950  rounded-xl text-left " onSubmit={handleSubmit}>
          <div className="flex flex-col  justify-center mt-4  relative">
            <label className=" text-slate-50 mb-1.5" htmlFor="password">
              Email: ( davidalejoms@gmail.com )
            </label>
            <p
              className={
                errors.user && "text-sm block text-center text-red-900 w-[90%] mx-auto absolute top-16 -right-1  bg-orange-300 rounded-lg "
              }
            >
              {errors.user}
            </p>
            <input
              className=" px-3 py-1 w-[90%] rounded-full mx-auto  text-gray-900   "
              name="user"
              type="text"
              value={userData.user}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col  justify-center mt-4 relative">
            <label className="  text-slate-50 mb-1.5" htmlFor="Nombre">
              Contraseña:( PASShenry2 )
            </label>
            <p
              className={
                errors.password &&
                " text-sm block text-center text-red-900 w-[100%] mx-auto absolute top-16 right-1  bg-orange-300 rounded-lg "
              }
            >
              {errors.password}
            </p>
            <input
              className=" px-3 py-1 w-[90%] rounded-full mx-auto  text-gray-900 "
              name="password"
              type="password"
              value={userData.password}
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
    </div>
  )
}
