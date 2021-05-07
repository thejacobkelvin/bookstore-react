import React from 'react';
import { Link } from 'react-router-dom';

const OpenSearch = props => (
  <div className="open-search">
    <Link to='/search' className='open-search-link'>
      <button>Add a Book</button>
    </Link>
  </div>
)

export default OpenSearch;
