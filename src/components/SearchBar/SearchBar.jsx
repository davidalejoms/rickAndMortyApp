import { useState } from "react"
import AddRandom from '../AddRandom/AddRandom'
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
    document.getElementById("searchMaster").value = ""
  }

  return (
    <div className="grid grid-cols-2 p-2 mx-auto mt-1 " id="searchSectionWrapper ">
      <div className="text-right mr-10" id="searchWrapper">
        <input
        id="searchMaster"
        className=" text-green-700 py-2 px-4 w-36 sm:w-80 rounded-full"
          onChange={(event) => setValueScan(event.target.value)}
          onKeyDown={handleKeyDown}
          type="search"
          placeholder="type id"
        />
        <button className="fa-solid fa-pen-to-square fa-xl -ml-10 text-lime-900"></button>
      </div>
      <AddRandom AddRandom={props.AddRandom}/>
      
    </div>


  )
}
