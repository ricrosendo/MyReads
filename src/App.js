import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookcase from './Bookcase'
import Search from './Search'
import './App.css'


class App extends React.Component {
  state = {
    books: [],
    booksFinded: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  onChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then( () => {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })        
    })
  }

  searchBooks = (query) => {
    console.log(query)
    BooksAPI.search(query).then((booksFinded) => {
      console.log(booksFinded)
      this.setState({ booksFinded })
    })

  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookcase 
            books={ this.state.books }
            onChangeShelf={this.onChangeShelf}
          />
        )}/>
        <Route path='/add' render={({ history }) => (
          <Search 
            books={this.state.booksFinded}
            onChangeShelf={this.onChangeShelf}
            searchBooks={this.searchBooks}       
          />
        )}/>
      </div>
    )
  }
}

export default App
