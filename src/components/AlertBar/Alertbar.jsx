import React from "react"
import styles from "./AlertBar.module.css"

export default function AlertBar(props) {
    let state = ".inactive"
  if (props.warning == "") {
    state = styles.inactive
    
  } else {
    state = styles.AlertBar
  }
  return (
    <div className={state}>
      <div className={styles.AlertContent}>Advertencia: {props.warning}</div>
    </div>
  )
}
