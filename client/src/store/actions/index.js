import {
  UPDATE_SAME_GENRE_MOVIES,
  SAVE_TERM,
  TOGGLE_SEARCH_BY,
  TOGGLE_SORT_BY,
  TOGGLE_SORT_ORDER,
  CHANGE_PAGE,
  CHANGE_ITEMS_PER_PAGE,
  CHANGE_OFFSET,
  SEARCH_BUTTON_CLICK,
  FETCH_MOVIES,
  UPDATE_MOVIES,
  FETCH_MOVIE,
  UPDATE_MOVIE,
  CLEAR_STATE,
} from '../../constants/index';

export const fetchMovies = (url) => ({
  type: FETCH_MOVIES,
  url,
});

export const fetchMovie = (id) => ({
  type: FETCH_MOVIE,
  id,
});

export const updateMovies = (movies, total) => ({
  type: UPDATE_MOVIES,
  movies,
  total,
});

export const updateMovie = (activeFilm) => ({
  type: UPDATE_MOVIE,
  activeFilm,
});

export const updateSameGenresFilms = (movies) => ({
  type: UPDATE_SAME_GENRE_MOVIES,
  movies,
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

export const clearState = () => ({
  type: CLEAR_STATE,
});
