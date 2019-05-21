import {
  FETCH_MOVIE,
  UPDATE_MOVIE,
  SEARCH_BUTTON_CLICK,
} from '../../constants/index';

const initialState = {
  activeFilm: null,
  id: null,
  loading: false,
};

const movie = (state = initialState, {
  type, activeFilm, id,
}) => {
  switch (type) {
    case FETCH_MOVIE:
      return {
        ...state,
        id,
        loading: true,
      };
    case UPDATE_MOVIE:
      return {
        ...state,
        activeFilm,
        loading: false,
      };
    case SEARCH_BUTTON_CLICK:
      return {
        ...state,
        activeFilm: null,
      };
    default:
      return state;
  }
};

export default movie;
