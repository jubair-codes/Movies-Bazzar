import React, { useState } from 'react';
import { searchMovies } from '../services/api';

const SearchBar = ({ ReciveSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    try {
      const searchResults = await searchMovies(searchQuery);
      ReciveSearchResults(searchResults); // Pass search results to parent
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className='search-form'>
        <input
          type='text'
          placeholder='Search for movies...'
          className='search-input'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type='submit' className='search-btn'>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;