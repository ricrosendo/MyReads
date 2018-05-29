import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Bookcase extends Component {

    render() {
        const { books, onChangeShelf } = this.props
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => 'currentlyReading' == book.shelf).map( book => (
                            <li>
                                <Book 
                                    obj={ book }
                                    onChangeShelf={ onChangeShelf }/>
                            </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => 'wantToRead' == book.shelf).map( book => (
                            <li>
                                <Book 
                                obj={ book }
                                onChangeShelf={ onChangeShelf }/>
                            </li>
                        ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.filter((book) => 'read' == book.shelf).map( book => (
                            <li>
                                <Book 
                                obj={ book }
                                onChangeShelf={ onChangeShelf }/>   
                            </li>
                        ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
                <Link to='/add'>Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Bookcase