import styles from "./SearchBar.module.css"
export default function SearchBar(props) {
  const handleSearch = (event) => props.onSearch(event.target.value)


  function handleKeyDown(event) {
   if (event.key === "Enter") {
     handleSearch();
   }
 }

  return (
    <div>
      <input onBlur={handleSearch} onKeyDown={handleKeyDown}  className={styles.input} type="search" />
      <button className={styles.button} /* onClick={props.onSearch} */>Agregar</button>
    </div>
  )
}
