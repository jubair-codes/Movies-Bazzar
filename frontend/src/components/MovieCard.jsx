import React from 'react';
import '../css/MovieCard.css';

const MovieCard = (props) => {

    const { title, release_date, poster_path } = props.movie;

    return (
        <div className='movie-card'>
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className='poster-cover' />
            </div>
            {
                props.favoriteBtn ? (
                    <div className="movie-overlay">
                        <button className="favorite-btn" onClick={() => { props.onFavoriteClick(props.movie) }}>
                            🤍
                        </button>
                    </div>
                ) : (
                    <></>
                )
            }

            <div className="movie-info">
                <h3>{title}</h3>
                <p>{release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
};

export default MovieCard;