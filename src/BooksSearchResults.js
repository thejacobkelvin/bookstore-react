import React from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

const BooksSearchResults = ({ books, shelfupdate, shelfkeys, value, selectupdate, booksList }) => (
  <div className='search-books-results'>
    <ol className='books-grid'>
      {books.length > 0 && (
        books.map(book => {
        return (
          <li key={book.id}>
            <div className='book'>
              <div className='book-top'>
                <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                <BookShelfChanger book={book} shelfupdate={shelfupdate} value={book.shelf} selectupdate={selectupdate} />
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
            </div>
          </li>
        )
      }))
    }
    </ol>
  </div>
)

BooksSearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BooksSearchResults;
