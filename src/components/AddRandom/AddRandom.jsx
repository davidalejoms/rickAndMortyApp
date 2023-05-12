import React from "react"
import styles from "./AddRandom.module.css"
function AddRandom(props) {
  const randomHandler = () => {
    props.AddRandom()
  }
  return (
    <div>
      <button onClick={randomHandler} className={styles.randomButton}>
        Aleatorio
      </button>
    </div>
  )
}

export default AddRandom
