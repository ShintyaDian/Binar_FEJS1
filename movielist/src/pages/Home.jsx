import React from 'react';
import { Link } from 'react-router-dom';

import HeroSlide from '../components/hero-slide/HeroSlide';
import MovieList from '../components/movie-list/MovieList';

import { movieType } from '../api/tmdbApi';

const Home = () => {
    return (
        <>
            <HeroSlide/>
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2 style={{color:'black'}}>Popular Movies</h2>
                        <Link to="/movie" style={{color:'red'}}>See all movies &gt;&gt;</Link>
                    </div>
                    <MovieList type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2 style={{color:'black'}}>Top Rated Movies</h2>
                        <Link to="/movie" style={{color:'red'}}>See all movies &gt;&gt;</Link>
                    </div>
                    <MovieList type={movieType.top_rated}/>
                </div>
            </div>
        </>
    );
}

export default Home;
