import { useState, useEffect, useId } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { /* connect, */ useDispatch, useSelector } from "react-redux"
import { addFav, removeFav } from "../../redux/actions"

// ==============================================================
export default function Card(props) {
  const dispatch = useDispatch()
  const myFavorites = useSelector((state) => state.myFavorites)
  const closeCardHandler = (event) => {
    props.onClose(event.target.value)
  }

  let [icon, setIcon] = useState("")
  const statusIcon = () => {
    if (props.status === "Dead")
      setIcon("absolute ml-5 mb-5    text-4xl fa-solid    fa-skull-crossbones     text-red-600 opacity-80 bg-slate-50 p-4 rounded-xl")
    if (props.status === "Alive")
      setIcon("absolute ml-5 mb-5   text-4xl fa-solid  fa-face-smile     text-green-600 opacity-80 bg-slate-50 p-4 rounded-xl")
    if (props.status === "unknown")
      setIcon("absolute ml-5 mb-5 text-4xl fa-solid    fa-question     text-blue-600 opacity-80 bg-slate-50 p-4 rounded-xl ")
  }
  useEffect(() => {
    statusIcon()
  }, [props.status])

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true)
      }
    })
  }, [myFavorites])

  let [isFav, setIsFav] = useState(false)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false) //estado local
      dispatch(removeFav(props.id)) //estado global
    } else {
      setIsFav(true) //estado local
      dispatch(addFav(props)) //estado global
    }
  }
  const location = useLocation().pathname
  const navigate = useNavigate()
  const toChar = () => {
    navigate(`/detail/${props.id}`)
  }
  const [displayer, setDisplayer] = useState("hidden")
  const showerCard = () => {
    setDisplayer("visible")
  }

  return (
    <div
      className={`bg-gray-900 bg-opacity-85 m-1 rounded-3xl  relative z-50 shadow-2xl border-4 border-gray-900 shadow-emerald-600  text-slate-300 animate hover:border-4 hover:border-green-400 hover:shadow-xl hover:shadow--500 cursor-pointer  ${displayer} `}
    >
      <div key={useId()} className=" h-full  grid grid-cols-2 opacity-95  " id="cardHolder" onClick={() => toChar()}>
        <div className="flex items-end justify-items-end " id="containerImage">
          <img className="min-h-full rounded-l-3xl p-3 object-cover object-center  " src={props.image} alt="" onLoad={showerCard} />

          <div className={icon}></div>
        </div>
        <div className="relative p-4 pl-3" id="DescriptionContainer">
          <Link to={`/detail/${props.id}`}>
            <h1 className="text-stone-100 text-lg text-left  mt-10 leading-none my-5 hover:underline">
              {props.id}
              <br />
              <strong className="  text-left text-white">{props.name}</strong> <br />
            </h1>
          </Link>
          <h2 className="  text-left mt-5 leading-none ">
            Status:
            <strong className="  ml-2">{props.status}</strong>
          </h2>
          <h2 className="  text-left mt-3 leading-none ">
            Is:
            <strong className="  ml-2"> {props.species} </strong>
          </h2>
          <h2 className="  text-left mt-3 leading-none ">
            Gender:
            <strong className="  ml-2">{props.gender} </strong>
          </h2>
          <h2 className="  text-left my-3 leading-none   ">
            Origin:
            <strong className=" block ml-2  leading-6">{props.origin}</strong>
          </h2>
        </div>
      </div>
      {isFav ? (
        <button
          className="z-1000 absolute top-2 right-20 text-red-500 fa-solid fa-heart text-3xl px-3 rounded-full bg-gray-300"
          onClick={handleFavorite}
          value={props.id}
        ></button>
      ) : (
        <button
          className="z-100 absolute top-2 right-20 text-gray-300 fa-solid fa-heart text-3xl px-3 rounded-full bg-gray-900"
          onClick={handleFavorite}
        ></button>
      )}
      <button
        className={
          location === "/favorites" ? "" : " fa-solid fa-trash fa-xl absolute top-2 right-2 text-red-600 bg-gray-200 p-4 rounded-full  "
        }
        onClick={closeCardHandler}
        value={props.id}
      ></button>
    </div>
  )
}
