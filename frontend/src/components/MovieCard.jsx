import React from 'react';
import '../css/MovieCard.css';

const MovieCard = (props) => {

    const { title, release_date, url } = props.movie;
    const onFavoriteClick = () => {
        alert('Added to favorites!');
    }

    return (
        <div className='movie-card'>
            <div className="movie-poster">
                <img src={url} alt={title} className='poster-cover'/>
            </div>
            <div className="movie-overlay">
                <button className="fav-btn" onClick={onFavoriteClick}>
                    🤍
                </button>
            </div>
            <div className="movie-info">
                <h3>{title}</h3>
                <p>{release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;