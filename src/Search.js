import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends Component {

    render() {
        const { searchBooks, onChangeShelf, books } = this.props
        return (
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">
                    
                    <input type="text" placeholder="Search by title or author" onChange={ (e) => searchBooks(e.target.value) }/>

                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {books.map( book => (
                        <li>
                            <Book 
                                obj={ book }
                                onChangeShelf={ onChangeShelf }/>
                        </li>
                    ))}
                </ol>
                </div>
            </div>
        )
    }
}

export default Search