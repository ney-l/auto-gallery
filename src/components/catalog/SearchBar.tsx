'use client';

import { useState } from 'react';
import SearchAutoMakers from './SearchAutoMakers';

const SearchBar = () => {
  const [autoMaker, setAutoMaker] = useState('');

  const handleSearch = () => alert('to do');
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchAutoMakers autoMaker={autoMaker} setAutoMaker={setAutoMaker} />
      </div>
    </form>
  );
};

export default SearchBar;
