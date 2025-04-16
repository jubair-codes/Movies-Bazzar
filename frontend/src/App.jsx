import React, { useState } from 'react';
import './css/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import SearchResults from './pages/SearchResults';

function App() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  const onFavoriteClick = (movie) => {
    let newFavorites = [...favorites, movie];
    setFavorites(newFavorites);
    console.log(favorites);
  };

  const ReciveSearchResults = (searchResults) => {
    setSearchedMovies(searchResults); // Update with new search results
    navigate('/search-results'); // Navigate to the search results page
  };

  return (
    <>
      <Navbar />
      <main className='main-content'>
        <SearchBar ReciveSearchResults={ReciveSearchResults} />
        <Routes>
          <Route
            path='/'
            element={<Home onFavoriteClick={onFavoriteClick} />}
          />
          <Route
            path='/search-results'
            element={
              <SearchResults
                searchedMovies={searchedMovies}
                onFavoriteClick={onFavoriteClick}
              />
            }
          />
          <Route
            path='/favorites'
            element={
              <Favorites
                favoriteMovies={favorites}
                favoriteBtn={false}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;