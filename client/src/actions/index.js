import axios from 'axios';

import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIE_SUCCESS,
  FETCH_SAME_GENRE_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
  SAVE_TERM,
  TOGGLE_SEARCH_BY,
  TOGGLE_SORT_BY,
  TOGGLE_SORT_ORDER,
  CHANGE_PAGE,
  CHANGE_ITEMS_PER_PAGE,
  CHANGE_OFFSET,
  SEARCH_BUTTON_CLICK,
} from '../constants';

export const fetchMoviesSuccess = (movies, total) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
  total,
});

export const fetchMovieSuccess = (activeFilm) => ({
  type: FETCH_MOVIE_SUCCESS,
  activeFilm,
});

export const fetchSameGenreMoviesSuccess = (sameGenresFilms) => ({
  type: FETCH_SAME_GENRE_MOVIES_SUCCESS,
  sameGenresFilms,
});

export const fetchMoviesError = () => ({
  type: FETCH_MOVIES_ERROR,
});

export const saveTerm = term => ({
  type: SAVE_TERM,
  term,
});

export const toggleSearchBy = searchBy => ({
  type: TOGGLE_SEARCH_BY,
  searchBy,
});

export const toggleSortBy = sortBy => ({
  type: TOGGLE_SORT_BY,
  sortBy,
});

export const toggleSortOrder = sortOrder => ({
  type: TOGGLE_SORT_ORDER,
  sortOrder,
});

export const changePage = (currentPage) => ({
  type: CHANGE_PAGE,
  currentPage,
});

export const changeMoviesPerPage = (moviesPerPage) => ({
  type: CHANGE_ITEMS_PER_PAGE,
  moviesPerPage,
});

export const changeOffset = () => ({
  type: CHANGE_OFFSET,
});

export const searchButtonHandler = () => ({
  type: SEARCH_BUTTON_CLICK,
});

export const fetchSameGenreMovies = (genre) => async dispatch => {
  const { search } = store.getState();
  const { moviesPerPage, offset } = search;
  const url = `https://reactjs-cdp.herokuapp.com/movies?filter=${genre}&limit=${moviesPerPage}&offset=${offset}`;
  await axios.get(url)
    .then(response => {
      const { data } = response;
      dispatch(fetchSameGenreMoviesSuccess(data.data));
    });
};

export const fetchMovies = (searchBy, sortBy, sortOrder, term, offset, moviesPerPage) => async dispatch => {
  const url = `http://react-cdp-api.herokuapp.com/movies?searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${term}&offset=${offset}&limit=${moviesPerPage}`;
  await axios.get(url)
    .then(response => {
      dispatch(fetchMoviesSuccess(response.data.data, response.data.total));
    });
};

export const fetchMovie = (id) => async dispatch => {
  const url = `http://react-cdp-api.herokuapp.com/movies/${id}`;
  await axios.get(url)
    .then(response => {
      dispatch(fetchMovieSuccess(response.data));
      dispatch(fetchSameGenreMovies(response.data.genres[0]));
    });
};
