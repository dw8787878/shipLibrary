import React, {Component} from 'react'
import Search from './Search'
import { Provider, connect } from 'react-redux'
import { queryUserBooks } from '../reducers/searchResults'


class Main extends Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return {}
}

const mapDispatchToProps = function(dispatch) {
  return {}
}

const mainContainer = connect(mapStateToProps, mapDispatchToProps)(Main)

export default mainContainer
