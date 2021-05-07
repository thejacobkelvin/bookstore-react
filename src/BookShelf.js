import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const shelves = ['Currently Reading', 'Want to Read', 'Read'];
const shelfkeys = ['currentlyReading', 'wantToRead', 'read'];

const BookShelf = ({ books, shelfupdate, selectupdate }) => (
  <div>
    {shelves.map((shelf, index) => {
      return (
        <div className='bookshelf'>
          <h2 className='bookshelf-title'>{shelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book shelf={shelf} shelfkey={shelfkeys[index]} books={books} shelfupdate={shelfupdate} selectupdate={selectupdate} />
            </ol>
          </div>
        </div>
      )
    })}
  </div>
)

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  shelfupdate: PropTypes.func.isRequired
}

export default BookShelf;
