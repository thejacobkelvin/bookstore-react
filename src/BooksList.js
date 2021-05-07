import React from 'react';
import PropTypes from 'prop-types';
import BookShelves from './BookShelves';
import OpenSearch from './OpenSearch';

const BooksList = ({ books, shelfupdate, selectupdate }) => (
  <div className='list-books'>
    <div className='list-books-title'>
      <h1>BookStore</h1>
    </div>
    <BookShelves books={books} shelfupdate={shelfupdate} selectupdate={selectupdate} />
    <OpenSearch />
  </div>
)

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BooksList;
