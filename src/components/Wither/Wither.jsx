import React from "react"

export default function Wither() {
  let width = ""
  let ancho = document.documentElement.clientWidth
  if (ancho < 640) width = "<strong> DEFAULT muy pequeño "
  else if (ancho >= 640 && ancho < 768) width = "SM: CELULAR PORTRAIT"
  else if (ancho >= 768 && ancho < 1024) width = "MD: IPAD"
  else if (ancho >= 1024 && ancho < 1280) width = "LG: LAPTOP  "
  else if (ancho >= 1280 && ancho < 1536) width = "XL: MACBOOKS RETINA"
  else if (ancho >= 1536) width = "2XL: DISPLAY RETINA EXTRA GRANDE"

  return (
    <div className=" m-0 p-0  text-xs text-center bg-gray-100  sm:bg-red-200 md:bg-amber-200 lg:bg-emerald-200 xl:bg-cyan-200 2xl:bg-fuchsia-200 ">
      {`Ancho de:  ${document.documentElement.clientWidth} px. en modo:`}
      <strong>{width}</strong>
    </div>
  )
}
