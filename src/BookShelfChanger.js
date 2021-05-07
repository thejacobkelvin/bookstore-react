import React from 'react';
import PropTypes from 'prop-types';

const BookShelfChanger = ({ book, shelfupdate, value, selectupdate }) => (
  <div className="book-shelf-changer">
    <select value={value ? value : 'none'} onChange={(event) => {shelfupdate(book, event.target.value); selectupdate(event.target.value) }} >
      <option value="move" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none" defaultValue>None</option>
    </select>
  </div>
)

BookShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  shelfupdate: PropTypes.func.isRequired
}


export default BookShelfChanger;
