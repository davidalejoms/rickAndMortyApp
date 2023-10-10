import env from "react-dotenv"

import axios from "axios"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const REMOVE_ALL = "REMOVE_ALL"
export const FILTER = "FILTER"
export const ORDER = "ORDER "

export const addFav = (character) => {
  const endpoint = `${env.URLRICK}/rickandmorty/fav`
  return async (dispatch) => {
    try {
      await axios.post(endpoint, character).then(({ data }) => {
        return dispatch({
          type: ADD_FAV,
          payload: data,
        })
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
// export const addFav = (char) => {
//   console.info(char)
//   return { type: ADD_FAV, payload: char }
// }
export const removeFav = (id) => {
  const endpoint = `${env.URLRICK}/rickandmorty/fav/${id}`
  return async (dispatch) => {
    try {
      await axios.delete(endpoint).then(({ data }) => {
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        })
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }
}
export const removeAll = () => {
  const endpoint = `${env.URLRICK}/rickandmorty/clear`
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
