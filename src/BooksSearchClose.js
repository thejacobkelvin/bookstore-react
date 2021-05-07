import React from 'react';
import { Link } from 'react-router-dom';

const BooksSearchClose = props => (
  <Link to='/'>
    <button className='close-search'>Close</button>
  </Link>
)

export default BooksSearchClose;
