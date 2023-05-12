import style from "./Card.module.css"
export default function Card(props) {

  return (
    <div className={style.cardBody}>
      <button className={style.CloseButton} onClick={props.onClose}>
        X
      </button>
      <img className={style.ProfileImage} src={props.image} alt="" />
      <h2 className={style.name}>
        <strong>Name:</strong> <br /> {props.name}
      </h2>
      <h2 className={style.isAlive}>
        <strong>Status: </strong>
        {props.status}
      </h2>
      <h2 className={style.status}>
        <strong>Species: </strong>
        {props.species}
      </h2>
      <h2 className={style.originName}>
        <strong>Gender: </strong>
        {props.gender}
      </h2>
      <h2 className={style.gender}>
        <strong>Origin: </strong>
        {props.origin}
      </h2>
    </div>
  )
}
