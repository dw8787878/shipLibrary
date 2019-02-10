//import { combineReducers } from 'redux'

//const rootReducer = combineReducers({
  //searchResults: require('./searchResults').default
//})
import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const LOAD_USER_BOOKS = 'LOAD_USER_BOOKS';

/* ------------   ACTION CREATORS     ------------------ */

const loadUserBooks = books => ({ type: LOAD_USER_BOOKS, books })

/* ------------       REDUCER     ------------------ */

export default function reducer(state = [], action) {
  switch (action.type) {
  case LOAD_USER_BOOKS:
    return [ ...state, action.books]
  default:
    return state
  }
}

/* ------------   THUNK CREATORS     ------------------ */
// the base URL for your REST API backend
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

export const queryUserBooks = (queryString) => {
  console.log("axios:" + `${baseUrl}${queryString}`);
  return (dispatch) => {
    return axios.get(`${baseUrl}${queryString}`)
      .then(response => {
        dispatch(loadUserBooks(response.data))
      })
      .catch(error => {
        throw (error);
      });
  };
};
