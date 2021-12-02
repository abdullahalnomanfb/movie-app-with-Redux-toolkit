import axios from "axios";

export default axios.create({
    // baseURL: 'http://www.omdbapi.com'
    baseURL: 'https://api.themoviedb.org'
})