import movies from './movies';

import {
  FETCH_MOVIES,
  UPDATE_MOVIES,
  UPDATE_SAME_GENRE_MOVIES,
  CLEAR_STATE,
} from '../../constants/index';

const moviesExample = [
  {
    id: 11031,
    title: 'This Is Spinal Tap',
    tagline: "Does for rock & roll what 'The Sound of Music' did for hills.",
    vote_average: 7.7,
    vote_count: 517,
    release_date: '1984-05-04',
    poster_path: 'https://image.tmdb.org/t/p/w500/2VDPeoPJ2bKdmfuJxxCktx1hr5g.jpg',
    overview: '"This Is Spinal Tap" shines a light on the self-contained universe ',
    budget: 2500000,
    revenue: 4736202,
    genres: ['Comedy', 'Music'],
    runtime: 82,
  },
];

const initialState = {
  url: null,
  movies: [],
  mode: null,
  loading: false,
  total: 0,
};

describe('movies reducer', () => {
  it('should return the initial state', () => {
    expect(movies(undefined, {})).toEqual(initialState);
  });

  it('FETCH_MOVIES', () => {
    const action = {
      type: FETCH_MOVIES,
      url: 'url',
    };

    expect(movies(initialState, action)).toEqual({
      ...initialState,
      url: action.url,
      loading: true,
    });
  });

  it('UPDATE_MOVIES', () => {
    const action = {
      type: UPDATE_MOVIES,
      movies: moviesExample,
      total: 1,
    };

    expect(movies(initialState, action)).toEqual({
      ...initialState,
      loading: false,
      mode: 'movies',
      movies: action.movies,
      total: action.total,
    });
  });

  it('UPDATE_SAME_GENRE_MOVIES', () => {
    const action = {
      type: UPDATE_SAME_GENRE_MOVIES,
      movies: moviesExample,
    };

    expect(movies(initialState, action)).toEqual({
      ...initialState,
      movies: action.movies,
      mode: 'sameGenre',
    });
  });

  it('CLEAR_STATE', () => {
    const action = {
      type: CLEAR_STATE,
    };

    expect(movies(initialState, action)).toEqual({
      ...initialState,
      movies: [],
      total: 0,
    });
  });
});
