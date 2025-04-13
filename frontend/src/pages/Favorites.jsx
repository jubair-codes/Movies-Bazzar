import React from 'react';
import '../css/Favorites.css';

const Favorites = () => {
    return (
        <div className='favorites-empty'>
            <h2>No Favorite Movies Yet</h2>
            <p>Start Adding Movies and they will Appear here</p>
        </div>
    );
};

export default Favorites;