import React from 'react';
import SearchBar from './SearchBar';
import { catalog } from '@/constants';

const Catalog = () => {
  return (
    <div className="mt-12 padding-x padding-y max-width" id="discover">
      <div className="home__text-container">
        <h1 className="text-4xl font-extrabold">{catalog.title}</h1>
        <p>{catalog.subtitle}</p>
      </div>

      <div className="home__filters">
        <SearchBar />
      </div>
    </div>
  );
};

export default Catalog;
