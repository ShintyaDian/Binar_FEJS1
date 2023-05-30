import React from 'react';

import MovieGrid from '../components/movie-grid/MovieGrid';

import bg from '../assets/footer-bg.jpg';

const Catalog = () => {

    return (
        <>
            <div 
            className="page-header" 
            style={{
                backgroundImage: `url(${bg})`, 
                padding: '6.5rem 0 2rem',
                marginBottom:'3rem'}}>
            </div>
            <div className="container">
                <div className="section mb-3">
                    <MovieGrid />
                </div>
            </div>
        </>
    );
}

export default Catalog;
