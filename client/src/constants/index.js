export const UPDATE_SAME_GENRE_MOVIES = 'UPDATE_SAME_GENRE_MOVIES';
export const SAVE_TERM = 'SAVE_TERM';
export const TOGGLE_SEARCH_BY = 'TOGGLE_SEARCH_BY';
export const TOGGLE_SORT_BY = 'TOGGLE_SORT_BY';
export const TOGGLE_SORT_ORDER = 'TOGGLE_SORT_ORDER';
export const CHANGE_PAGE = 'CHANGE_PER_PAGE';
export const CHANGE_ITEMS_PER_PAGE = 'CHANGE_ITEMS_PER_PAGE';
export const CHANGE_OFFSET = 'CHANGE_OFFSET';
export const SEARCH_BUTTON_CLICK = 'SEARCH_BUTTON_CLICK';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const UPDATE_MOVIE = 'UPDATE_MOVIE';
export const CLEAR_STATE = 'CLEAR_STATE';

export function getUrl (searchBy, sortBy, sortOrder, term, offset, moviesPerPage) {
  return `http://react-cdp-api.herokuapp.com/movies?searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${term}&offset=${offset}&limit=${moviesPerPage}`;
}
