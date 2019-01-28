import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  searchResults: require('./searchResults').default
})

export default rootReducer
