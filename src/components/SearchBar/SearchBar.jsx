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
    document.getElementById("searchMaster").value = ""
  }

  return (
      <div className="relative w-40  " id="searchWrapper">
        <input
          id="searchMaster"
          className=" text-gray-600 py-2 px-4   w-40  rounded-full"
          onChange={(event) => setValueScan(event.target.value)}
          onKeyDown={handleKeyDown}
          type="search"
          placeholder="1, 2, 40 etc.."
        />
        <button
          onClick={() => handleSearchButton()}
          className="   text-slate-50 absolute  top-0 right-0 mt-0.1  "
          id="searchTrigger">
          <i class="fa-solid fa-plus fa-circle text-slate-50 p-1 text-[2rem] bg-gray-300 hover:bg-gray-900 hover:text-white  rounded-full"></i>
          <i class=""></i>
        </button>
      </div>

  )
}
