import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { /* connect, */ useDispatch, useSelector } from "react-redux"
import { addFav, removeFav } from "../../redux/actions"
const Card = (props) => {
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
  useEffect(()=>{
    statusIcon()
  },[props.status])

 

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
 

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

  return (
    <div key={props.id} className=" bg-gray-900 bg-opacity-85  relative m-2 rounded-3xl grid grid-cols-2 opacity-95 /* max-w-sm */ shadow-2xl  shadow-emerald-600  text-slate-300  " >
      <div className="flex items-end justify-items-end" id="containerImage">
        <img className="min-h-full rounded-l-3xl p-3 object-cover object-center  " src={props.image} alt="" />

        <div className={icon}></div>
      </div>
      <div className="relative p-4 pl-0" id="DescriptionContainer">
       {isFav ? (
          <button
            className="z-100 absolute top-2 right-20 text-red-500 fa-solid fa-heart text-3xl px-3 rounded-full bg-gray-300"
            onClick={handleFavorite}
            value={props.id}
          ></button>
        ) :  (
          <button
            className="z-100 absolute top-2 right-20 text-gray-300 fa-solid fa-heart text-3xl px-3 rounded-full bg-gray-900"
            onClick={handleFavorite}
          ></button>
        )}
        <button
          className=" fa-solid fa-trash fa-xl absolute top-2 right-2 text-red-600 bg-gray-200 p-4 rounded-full  "
          onClick={closeCardHandler}
          value={props.id}
        ></button>
        <Link to={`/detail/${props.id}`}>
          <h1 className="text-stone-100 text-lg text-left  mt-10 leading-none my-5 hover:underline">
           {props.id}<br />
            <strong className="  text-left text-white">{props.name}</strong> <br />
          </h1>
        </Link>
        <h2 className="  text-left mt-5 leading-none ">
          Status:
          <strong className="  ml-2">{props.status}</strong>
        </h2>
        <h2 className="  text-left mt-3 leading-none ">Is:
          <strong className="  ml-2"> {props.species} </strong>
        </h2>
        <h2 className="  text-left mt-3 leading-none ">
          Gender:
          <strong className="  ml-2">{props.gender} </strong>
        </h2>
        <h2 className="  text-left my-3 leading-none  max-w-[10ch] ">
          Origin:
          
          <strong className="  ml-2  leading-6">{props.origin}</strong>
        </h2>
      </div>
    </div>
  )
}

// export const mapStateToProps = (state) => {
//   return {
//     todo: state.myfavorites,
//   }
// }
// export const MapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (char) => {
//       dispatch(addFav(char))
//     },
//     removeFav: (id) => {
//       dispatch(removeFav(id))
//     },
//   }
// }
// export default connect(mapStateToProps, MapDispatchToProps)(Card)
export default Card
