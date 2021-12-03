import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import movieApi from '../../Common/apis/movieApi'
// import { ApiKey } from '../../Common/apis/movieApiKey';
import {  fetchAsyncMovies, fetchAsyncShows } from '../../Features/movies/movieSlice';
import MoveListing from '../MoveListing/MoveListing';

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        // const fetchMovies = async () => {
        //     const response = await movieApi.get(
        //         `3/discover/movie?sort_by=popularity.desc&api_key=${ApiKey}`
        //     )
        //         .catch((err) => {
        //             console.log("err:", err);
        //         })
        //     dispatch(addMovies(response.data.results))
        // }
        // fetchMovies()
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch])

    return (
        <div>
            <div className="banner-img">
                <MoveListing />
            </div>
        </div>
    );
};

export default Home;