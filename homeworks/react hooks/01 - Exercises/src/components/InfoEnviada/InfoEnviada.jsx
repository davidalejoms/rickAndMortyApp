import React from "react"
import { useSelector } from "react-redux"

const InfoEnviada = () => {
  const store = useSelector((state) => state.formulario)
  const [informacion, setInformacion] = React.useState({
    mensaje: "",
    asunto: "",
    nombre: "",
    email: "",
  })
  React.useEffect(() => {
    setInformacion(store)
    //  console.log("estado local", informacion)
    //  console.log("estado global", store)
  }, [store])
  return (
    <div>
      {/* {console.log("estado local", informacion)} */}
      <h1>ESTA ES LA INFORMACIÓN QUE ENVIASTE...</h1>
      <h3>{informacion.nombre}</h3>
      <h3>{informacion.email}</h3>
      <h3>{informacion.asunto}</h3>
      <h3>{informacion.mensaje}</h3>
    </div>
  )
}

export default InfoEnviada
