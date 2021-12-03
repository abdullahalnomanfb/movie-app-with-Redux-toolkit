import React from 'react';
import { useSelector } from 'react-redux';
import MoveCard from '../MoveCard/MoveCard';

const MoveListing = () => {

    const movies = useSelector((state) => state.movies.movies)

    console.log("movies", movies);

    return (
        <div>
            <h1>This is list</h1>
            <div className="container-fluid">
                <div className="row">
                    {
                        movies?.map(movi => <MoveCard key={movi.id} movie={movi} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MoveListing;