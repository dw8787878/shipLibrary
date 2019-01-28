import React, {Component} from 'react'
import { render } from 'react-dom'

export default class Search extends Component{
  constructor(props){
    super(props)
    this.state = {bookQuery: '',
                  items: null
                };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({bookQuery: event.target.value});
  }

  getBooks(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.bookQuery}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(`this is the result: ${JSON.stringify(result.items)}`);
          this.setState({
            items: result.items
          });
        }
      )
  }

  handleSubmit(event) {
    alert('A book query was submitted: ' + this.state.bookQuery);
    event.preventDefault();
    this.getBooks();
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Please submit book query:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      </form>
    );
  }
}
