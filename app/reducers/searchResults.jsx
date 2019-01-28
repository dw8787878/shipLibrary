import axios from 'axios'

/* -----------------    ACTIONS     ------------------ */

const LOAD_USER_BOOKS = 'LOAD_USER_BOOKS';
const LOAD_USER_BOOKS_SUCCESS = 'LOAD_USER_BOOKS_SUCCESS';

/* ------------   ACTION CREATORS     ------------------ */

const loadUserBooks = topStories => ({ type: LOAD_USER_BOOKS, results })

/* ------------       REDUCER     ------------------ */

export default function reducer( results = [], action) {
  switch (action.type) {
  case LOAD_USER_BOOKS:
    results = action.state
    break;
  default:
    return results
  }
}

/* ------------   THUNK CREATORS     ------------------ */
// the base URL for your REST API backend
const baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=';

export const queryUserBooks = () => dispatch => {
  axios.get(`${baseUrl}`)
       .then(res => {
         dispatch(loadUserBooks(res.data))
       })
}

