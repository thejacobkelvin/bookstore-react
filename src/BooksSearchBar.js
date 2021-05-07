import React from 'react';
import PropTypes from 'prop-types';
import BooksSearchClose from './BooksSearchClose';
import BooksSearchInput from './BooksSearchInput';

const BooksSearchBar = ({ search }) => (
  <div className='search-books-bar'>
    <BooksSearchClose />
    <BooksSearchInput search={search} />
  </div>
)

BooksSearchBar.propTypes = {
  search: PropTypes.func,
}

export default BooksSearchBar;
