import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList';
import BooksSearch from './BooksSearch';
import { Route } from 'react-router-dom';
import './App.css';

class BooksApp extends Component {

  state = {
    booksList: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({
        booksList: data
      })
    })
  }

  shelfUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let booksUpdate = this.state.booksList.filter(b => b.id !== book.id);

    if(shelf !== 'none') {
      book.shelf = shelf;
      booksUpdate = booksUpdate.concat(book);
    }

    this.setState({
      booksList: booksUpdate
    })
  }

  selectUpdate = option => {
    this.setState({
      value: option
    })
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <BooksList books={this.state.booksList} shelfupdate={this.shelfUpdate} selectupdate={this.selectUpdate} />
        )} />
        <Route path='/search' render={() => (
          <BooksSearch booksList={this.state.booksList} search={this.booksSearch} shelfupdate={this.shelfUpdate} selectupdate={this.selectUpdate} />
        )} />
      </div>
    )
  }
}

export default BooksApp
