import React from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

const Book = ({ books, shelfkey, shelfupdate, value, selectupdate })  => (
  books.filter(book => book.shelf === shelfkey)
  .map(book => {
    return (
      <li key={book.id}>
        <div className='book'>
          <div className='book-top'>
            <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
            <BookShelfChanger book={book} shelfupdate={shelfupdate} value={shelfkey} selectupdate={selectupdate} />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.join(', ')}</div>
        </div>
      </li>
    )
  })
)

Book.propTypes = {
  shelfkey: PropTypes.string.isRequired,
  book: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default Book;
