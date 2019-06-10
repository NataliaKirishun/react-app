import { List } from 'immutable';
import {
  FETCH_MOVIES,
  UPDATE_MOVIES,
  UPDATE_SAME_GENRE_MOVIES,
  CLEAR_STATE,
} from '../../constants/index';


export const initialState = {
  url: null,
  movies: List([]),
  mode: null,
  loading: false,
  total: 0,
};

const movies = (state = initialState, {
  type, url, movies, total,
}) => {
  switch (type) {
    case FETCH_MOVIES:
      return {
        ...state,
        loading: true,
        url,
      };
    case UPDATE_MOVIES:
      return {
        ...state,
        loading: false,
        mode: 'movies',
        movies: List(movies),
        total,
      };
    case UPDATE_SAME_GENRE_MOVIES:
      return {
        ...state,
        movies: List(movies),
        mode: 'sameGenre',
      };
    case CLEAR_STATE:
      return {
        ...state,
        movies: List([]),
        total: 0,
      };
    default:
      return state;
  }
};

export default movies;
