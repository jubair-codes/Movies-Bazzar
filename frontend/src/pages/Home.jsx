import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import '../css/Home.css';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const movies = [
        { id: 1, title: 'Inception', release_date: '2010', url: 'https://th.bing.com/th/id/R.c763d49a169e7808bb4cec730edbca89?rik=PLRJcCgS5uXBqQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2ffWnWpHj.jpg&ehk=29FDFCL%2bWfstN40cq0jG8y0kvFBE%2fU%2fHFvn24Iy0HIo%3d&risl=&pid=ImgRaw&r=0' },
        { id: 2, title: 'Interstellar', release_date: '2014', url: 'https://image.tmdb.org/t/p/w500/8y3c2j7v4g5x5v5v5v5v5v5v5.jpg' },
        { id: 3, title: 'The Dark Knight', release_date: '2008', url: 'https://image.tmdb.org/t/p/w500/8y3c2j7v4g5x5v5v5v5v5v5v5.jpg' }
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery)
    }

    return (
        <div className='home'>
            <form onSubmit={handleSearch} className='search-form'>
                <input 
                    type="text" 
                    placeholder='Search for movies...' className='search-input' 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type='submit' className='search-btn'>Search</button>
            </form>

            <div className="movies-grid">
                {
                    movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Home;