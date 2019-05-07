import movies from './movies';

import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
} from '../../constants/index';

const initialState = {
    movies: [],
    isFetched: false,
    total: 0,
};

describe('movies reducer', () => {

    it('should return the initial state', () => {
      expect(movies(undefined, {})).toEqual(initialState)
    })

    it('FETCH_MOVIES_SUCCESS', () => {

        const action = {
          type: FETCH_MOVIES_SUCCESS,
          movies: [1,2,3],
          total:3,
        }

        expect(movies(initialState, action)).toEqual({
          ...initialState,
          movies: action.movies,
          total: action.total,
          isFetched: true,
        })
  })

    it('FETCH_MOVIES_ERROR', () => {

        const action = {
            type: FETCH_MOVIES_ERROR,
        }

        expect(movies(initialState, action)).toEqual({
            ...initialState,
            isFetched: true,
        })
    })

})

