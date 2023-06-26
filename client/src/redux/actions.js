import axios from "axios"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const REMOVE_ALL = "REMOVE_ALL"
export const FILTER = "FILTER"
export const ORDER = "ORDER "
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav"
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      })
    })
  }
}
// export const addFav = (char) => {
//   console.info(char)
//   return { type: ADD_FAV, payload: char }
// }
export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      })
    })
  }
}
export const removeAll = () => {
  const endpoint = `http://localhost:3001/rickandmorty/clear`
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_ALL,
        payload: data,
      })
    })
  }
}

// export const removeFav = (id) => {
//   return { type: REMOVE_FAV, payload: id }
// }
export const filterCards = (anything) => {
  return { type: FILTER, payload: anything }
}
export const orderCards = (anything) => {
  return { type: ORDER, payload: anything }
}
