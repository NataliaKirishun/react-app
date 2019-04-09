import {
    FETCH_MOVIES,
} from '../constants';

export default fetchMovies = movies => ({
    type: FETCH_MOVIES,
    movies
});