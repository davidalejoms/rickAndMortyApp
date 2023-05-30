import { ADD_FAV, REMOVE_FAV } from "../redux/actions"
const initialState = {
  myFavorites: [],
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return { ...state, myFavorites: [...state.myFavorites, action.payload] }
    case REMOVE_FAV:
      if (action.payload!=='all') {
        return {
          ...state,
          myFavorites: state.myFavorites.filter((char) => char.id !== parseInt(action.payload)),
        }
      }else if (action.payload==='all') {
        
        return initialState
      }

    default:
      return { ...state }
  }
}

export default rootReducer
