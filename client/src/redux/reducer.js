import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, REMOVE_ALL } from "../redux/actions"
const initialState = {
  myFavorites: [],
  allCharacters: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload }
    // case ADD_FAV:
    //   return { ...state, allCharacters: [...state.allCharacters, action.payload], myFavorites: [...state.allCharacters, action.payload] }
    case FILTER:
      if (action.payload === "Default") {
        return { ...state, myFavorites: state.allCharacters }
      } else {
        const bygender = state.allCharacters.filter((is) => is.gender === action.payload)
        return { ...state, myFavorites: bygender }
      }
    case ORDER:
      let orderedChars = []
      if (!action.payload) {
        return { ...state, myFavorites: state.allCharacters }
      } else if (action.payload === "A") {
        orderedChars = state.allCharacters.sort((a, b) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
          return 0
        })
      } else if (action.payload === "D") {
        orderedChars = state.allCharacters.sort((b, a) => {
          if (a.name < b.name) {
            return -1
          }
          if (a.name > b.name) {
            return 1
          }
          return 0
        })
      }
      return { ...state, myFavorites: orderedChars }
    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload, allCharacters: action.payload }

    case REMOVE_ALL:
      return initialState

    default:
      return { ...state }
  }
}

export default rootReducer
