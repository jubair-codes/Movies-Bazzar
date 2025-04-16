import React from 'react';
import '../css/Favorites.css';
import MovieCard from '../components/MovieCard';

const Favorites = (props) => {
    const movies = props.favoriteMovies;

    if (movies.length == 0) {
        return (
            <div className='favorites-empty'>
                <h2>No Favorite Movies Yet</h2>
                <p>Start Adding Movies and they will Appear here</p>
            </div>
        )
    }
    else {
        return (
            <div className="movies-grid">
                {
                    movies.map((movie) =>
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onFavoriteClick={props.onFavoriteClick}
                        />
                    )
                }
            </div>
        )
    }

};

export default Favorites;