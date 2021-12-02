import React, { useEffect } from 'react';
import movieApi from '../../Common/apis/movieApi'
import { ApiKey } from '../../Common/apis/movieApiKey';
import MoveListing from '../MoveListing/MoveListing';

const Home = () => {

    useEffect(() => {

        const fetchMovies = async () => {
            const response = await movieApi.get(
                `3/discover/movie?sort_by=popularity.desc&api_key=${ApiKey}`
            )
                .catch((err) => {
                    console.log("err:", err);
                })
            console.log("Res", response.data.results);
        }
        fetchMovies()
    }, [])

    return (
        <div>
            <div className="banner-img">
                <MoveListing />
            </div>
        </div>
    );
};

export default Home;