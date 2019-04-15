import {
  FETCH_MOVIE_SUCCESS,
  FETCH_SAME_GENRE_MOVIES_SUCCESS,
  SEARCH_BUTTON_CLICK,
} from '../constants';

const initialState = {
  activeFilm: null,
  sameGenresFilms: null,
};

const movie = (state = initialState, {
  type, activeFilm, sameGenresFilms,
}) => {
  switch (type) {
    case FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        activeFilm,
      };
    case FETCH_SAME_GENRE_MOVIES_SUCCESS:
      return {
        ...state,
        sameGenresFilms,
      };
    case SEARCH_BUTTON_CLICK:
      return {
        ...state,
        activeFilm: null,
        sameGenresFilms: null,
      };
    default:
      return state;
  }
};

export default movie;
