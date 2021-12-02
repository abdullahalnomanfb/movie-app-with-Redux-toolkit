import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payLod }) => {
            state.movies = payLod;

        },
    },

})

export const {addMovies}=movieSlice.actions;
export default movieSlice.reducer