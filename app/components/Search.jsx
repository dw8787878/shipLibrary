import React, {Component} from 'react'
import { connect } from 'react-redux'
import { queryUserBooks } from '../reducers/searchResults'

class Search extends Component{
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    //console.log('event' + event)
    //console.log('event target theQuery' + event.target.theQuery)
    this.props.queryForBooks(event.target.theQuery);
  }

  render(){
    let listOfBooks = this.props.books ? this.props.books : [];
    listOfBooks = JSON.stringify(listOfBooks);
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
        Please submit book query:
        </label>
        <input type="text" name="theQuery" />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <h1>Here are the results:</h1>
      {listOfBooks}
              {/*(listOfBooks.map((book) => {
                  return (
                    <div key={book.id}>
                      <li>
                        <div> {book} </div>
                      </li>
                    </div>
                  )
              }))
              */}

      </div>
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
  console.log('state ', state)
  return {
    books: state
  }
}

const searchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default searchContainer
