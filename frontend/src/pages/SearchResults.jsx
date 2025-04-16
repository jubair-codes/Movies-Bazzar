import React from 'react';
import MovieCard from '../components/MovieCard';
import '../css/SearchResults.css';

const SearchResults = ({ searchedMovies, onFavoriteClick }) => {
  return (
    <div className='search-results'>
      {searchedMovies.length === 0 ? (
        <div className='no-results'>No results found.</div>
      ) : (
        <div className='movies-grid'>
          {searchedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onFavoriteClick={onFavoriteClick}
              favoriteBtn={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;