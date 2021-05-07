import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookShelves = ({ books, shelfupdate, selectupdate }) => (
  <div className='list-books-content'>
    <BookShelf books={books} shelfupdate={shelfupdate} selectupdate={selectupdate} />
  </div>
)

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BookShelves;
