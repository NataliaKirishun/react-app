import axios from 'axios';
import store from '../store/store'

import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_SUCCESS,
    FETCH_MOVIES_ERROR,
    SAVE_TERM,
    TOGGLE_SEARCH_BY,
    TOGGLE_SORT_BY,
    TOGGLE_SORT_ORDER,
    CHANGE_PAGE,
    CHANGE_ITEMS_PER_PAGE,
    CHANGE_OFFSET,
    CHOOSE_CURRENT_FILM,
} from '../constants';

export const fetchMoviesSuccess = (movies, total) => ({
    type: FETCH_MOVIES_SUCCESS,
    movies,
    total
});

export const fetchMovieSuccess = (activeFilm) => ({
    type: FETCH_MOVIE_SUCCESS,
    activeFilm,
})

export const fetchMoviesError = error => ({
    type: FETCH_MOVIES_ERROR,
    error
});

export const saveTerm = term => ({
    type: SAVE_TERM,
    term
})

export const toggleSearchBy = searchBy => ({
    type: TOGGLE_SEARCH_BY,
    searchBy
});

export const toggleSortBy = sortBy => ({
    type: TOGGLE_SORT_BY,
    sortBy
});

export const toggleSortOrder = sortOrder => ({
    type: TOGGLE_SORT_ORDER,
    sortOrder,
})

export const changePage = (currentPage) => ({
    type: CHANGE_PAGE,
    currentPage,
})

export const changeMoviesPerPage = (moviesPerPage) => ({
    type: CHANGE_ITEMS_PER_PAGE,
    moviesPerPage,
})

export const changeOffset = () => ({
    type: CHANGE_OFFSET,
})

export const albumClickHandler = (id) => dispatch => {
    dispatch(chooseCurrentFilm(id));
}

export const changePageHandler = (id , currentPage) => dispatch => {
    dispatch(changePage(currentPage));
    dispatch(changeOffset());
    dispatch(fetchMovies());
}

export const changeMoviesPerPageHandler = (id, moviesPerPage) => dispatch => {
    dispatch(changeMoviesPerPage(moviesPerPage));
    dispatch(changeOffset());
    dispatch(fetchMovies());
}

export const toggleSortDirectionHandler = (sortOrder) => dispatch => {
    dispatch(toggleSortOrder(sortOrder));
    dispatch(fetchMovies());
}

export const toggleSortByHandler = (sortBy) => dispatch => {
    dispatch(toggleSortBy(sortBy));
    dispatch(fetchMovies());
}

export const searchSubmit = (term) => dispatch => {
    dispatch(saveTerm(term));
    dispatch(fetchMovies());
}

export const fetchMovie = (id) => async dispatch => {
    const url = `http://react-cdp-api.herokuapp.com/movies/${id}`;
    await axios.get(url)
        .then( response => {
            if (response.status === 200) {
                const data = response.data;
                console.log(data);
                dispatch(fetchMovieSuccess(data));
            } else {
                console.log(response);
                // dispatch(fetchMovieError(response))
            }
        })
}

export const fetchMovies = () => async dispatch => {
    const {search}=store.getState();
    const {currentPage, moviesPerPage, offset, searchBy, sortBy, sortOrder, term} = search;
    if (term) {
    const url = `http://react-cdp-api.herokuapp.com/movies?searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${term}&offset=${offset}&limit=${moviesPerPage}`;
    await axios.get(url)
        .then(response => {
          if (response.status === 200) {
              const data = response.data;
              dispatch(fetchMoviesSuccess(data.data, data.total))
          } else {
              console.log(response);
              // dispatch(fetchMoviesError(response))
          }
        });
        }
};

