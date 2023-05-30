import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import './movie-grid.scss';

import MovieCard from '../movie-card/MovieCard';
import { OutlineButton } from '../button/Button';

import tmdbApi, { movieType } from '../../api/tmdbApi';

const MovieGrid = props => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        const getList = async () => {
            let response = null;
            if (keyword === undefined) {
                const params = {};
                response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
            } else {
                const params = {
                    query: keyword
                }
                response = await tmdbApi.search({params});
            }
            setItems(response.results);
            setTotalPage(response.total_pages);
        }
        getList();
    }, [keyword]);

    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            const params = {
                page: page + 1
            };
            response = await tmdbApi.getMoviesList(movieType.upcoming, {params});
        } else {
            const params = {
                page: page + 1,
                query: keyword
            }
            response = await tmdbApi.search({params});
        }
        setItems([...items, ...response.results]);
        setPage(page + 1);
    }

    return (
        <>
            <div className="section mb-3" style={{display: (keyword===undefined) ? "none" : "block"}}>
                <h1 style={{color: "black"}}>Search Result "{keyword}"</h1>
            </div>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard item={item} key={i}/>)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null
            }
        </>
    );
}

export default MovieGrid;
