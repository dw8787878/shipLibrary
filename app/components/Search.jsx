import React, {Component} from 'react'
import { connect } from 'react-redux'
import { queryUserBooks } from '../reducers/searchResults'
import store from '../store.jsx'

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      queryText: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({queryText: event.target.value});
  }

  handleSubmit(){
    event.preventDefault();
    this.props.queryForBooks(this.state.queryText);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Please submit book query:
        <input type="text" value={this.state.queryText} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    queryForBooks: name =>
      dispatch(queryUserBooks(name))
  };
}

const mapStateToProps = function(state) {
  return {
    books: state.results
  }
}

const searchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default searchContainer
