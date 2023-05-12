import { useState } from "react"
import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
  const handleSearch = (event) => props.onSearch(event.target.value)

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch(event)
      inputCleaner()
    }
  }

  const [valueScan, setValueScan] = useState("")

  const handleSearchButton = () => {
    props.onSearch(valueScan)
    inputCleaner()
  }
  const inputCleaner = () => {
    document.getElementById("searchMaster").value=''
  }

  return (
    <div>
      <input
        id="searchMaster"
        onChange={(event) => setValueScan(event.target.value)}
        onKeyDown={handleKeyDown}
        className={styles.input}
        type="search"
      />
      <button className={styles.button} onClick={handleSearchButton}>
        Agregar
      </button>
    </div>
  )
}
