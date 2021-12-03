import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../Common/apis/movieApi'
import { ApiKey } from '../../Common/apis/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const response = await movieApi.get(
        `3/discover/movie?sort_by=popularity.desc&api_key=${ApiKey}`
    )
    return response.data.results

})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const response = await movieApi.get(
        `3/discover/movie?sort_by=popularity.desc&api_key=${ApiKey}`
    )
    return response.data.results

})

const initialState = {
    movies: [],
    shows:[]
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },

    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("fetch Successfully!");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("fetch Successfully!");
            return { ...state, shows: payload }
        },
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer