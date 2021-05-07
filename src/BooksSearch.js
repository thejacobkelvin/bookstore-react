import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types';
import { debounce } from 'throttle-debounce';
import BooksSearchBar from './BooksSearchBar';
import BooksSearchResults from './BooksSearchResults';

class BooksSearch extends Component {
  state = {
    booksSearch: []
  }

  booksSearch = debounce(250, false, query => {
    if(query !== '') {
      BooksAPI.search(query).then(data => {
        this.setState({
          booksSearch: data
        })
      })
    } else {
      this.setState({
        booksSearch: []
      })
    }
  })

  matchedBooks() {
    return this.state.booksSearch.length > 0 && this.state.booksSearch.map((booksSearchItem) => {
      this.props.booksList.filter((booksListItem) => {
          if(booksSearchItem.id === booksListItem.id) {
            booksSearchItem.shelf = booksListItem.shelf;
          };
          return booksListItem;
      })
      return booksSearchItem;
    })
  }

  render() {
    return (
      <div className='search-books'>
        <BooksSearchBar search={this.booksSearch} />
        <BooksSearchResults booksList={this.props.booksList} books={this.matchedBooks()} shelfupdate={this.props.shelfupdate} selectupdate={this.props.selectupdate} />
      </div>
    )
  }
}

BooksSearch.propTypes = {
  search: PropTypes.func,
  books: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BooksSearch;
