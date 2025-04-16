import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../css/Home.css';
import { getPopularMovies } from '../services/api';

const Home = ({ onFavoriteClick }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError('Failed to load movies...');
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  return (
    <div className='home'>
      {error && <div className='error_message'>{error}</div>}
      {loading ? (
        <div className='loading'>Loading...</div>
      ) : (
        <div className='movies-grid'>
          {movies.map((movie) => (
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

export default Home;