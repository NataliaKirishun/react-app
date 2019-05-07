import {
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_ERROR,
} from '../../constants/index';

export const initialState = {
  movies: [],
  isFetched: false,
  total: 0,
};

const movies = (state = initialState, { type, movies, total }) => {
  switch (type) {
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies,
        total,
        isFetched: true,
      };
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        isFetched: true,
      };
    default:
      return state;
  }
};

export default movies;
