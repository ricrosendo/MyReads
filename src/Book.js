import React, { Component } from 'react'

class Book extends Component {

    render() {
        const { obj, onChangeShelf } = this.props

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${obj.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onClick={ (e) => onChangeShelf(obj, e.target.value) }>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                </div>
                <div className="book-title">{ obj.title }</div>
                <div className="book-authors">{ obj.authors ? obj.authors[0] : '' }</div>
            </div>
        )
    }
}

export default Book