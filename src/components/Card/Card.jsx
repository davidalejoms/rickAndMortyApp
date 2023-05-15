import { useState } from "react"
import style from "./Card.module.css"
export default function Card(props) {
  const closeCardHandler = (event) => {
    props.onClose(event.target.value)
  }
  // todo: cambiar el logo segun el estado
  //  let [icon, setIcon] = useState("ok")

  // if (props.status === "Dead") setIcon( "absolute ml-4 mb-5 fa-solid  text-8xl  fa-skull-crossbones     text-red-600")
  // if (props.status === "Alive") setIcon( "absolute ml-4 mb-5 fa-solid  text-8xl  fa-face-laugh-wink     text-green-600")
  // if (props.status === "unknown") setIcon( "absolute ml-4 mb-5 fa-solid  text-8xl  fa-face-laugh-wink     text-green-600")

  return (
    <div key={props.id} className=" bg-gray-300 m-2 rounded-3xl grid grid-cols-2 opacity-95 " id="Card">
      <div className="flex items-end justify-items-end" id="containerImage">
        <img className="min-h-full rounded-l-3xl p-3 object-cover object-center  " src={props.image} alt="" />
        {/* <div className="absolute ml-4 mb-5 fa-solid  text-8xl  fa-face-laugh-wink     text-green-600 bg-slate-50 rounded-full p-2"  ></div> */}
      </div>
      <div className="relative p-4" id="DescriptionContainer">
        <button
          value={props.id}
          className="fa-solid fa-trash fa-xl absolute top-2 right-2 text-red-900 bg-slate-100 p-4 rounded-full  "
          onClick={closeCardHandler}
        ></button>

        <h2 /* className={style.name} */ className="text-stone-700 text-xl text-center mt-5 leading-none my-5 ">
          Name <br />
          <strong className=" text-3xl text-stone-900">{props.name}</strong> <br />
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Status:
          <strong className=" text-stone-900 ml-2">{props.status}</strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Species:
          <strong className=" text-stone-900 ml-2"> {props.species} </strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left mt-3 leading-none ">
          Gender:
          <strong className=" text-stone-900 ml-2">{props.gender} </strong>
        </h2>
        <h2 className="text-stone-700 text-xl text-left my-3leading-none ">
          Origin:
          <strong className=" text-stone-900 ml-2">{props.origin}</strong>
        </h2>
      </div>
    </div>
  )
}
