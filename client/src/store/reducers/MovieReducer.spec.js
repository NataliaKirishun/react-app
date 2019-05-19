import movie from './movie';

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

describe('movie reducer', () => {
  it('should return the initial state', () => {
    expect(movie(undefined, {})).toEqual(initialState);
  });

  it('FETCH_MOVIE', () => {
    const action = {
      type: FETCH_MOVIE,
      id: 1,
    };

    expect(movie(initialState, action)).toEqual({
      ...initialState,
      id: action.id,
      loading: true,
    });
  });

  it('UPDATE_MOVIE', () => {
    const action = {
      type: UPDATE_MOVIE,
      activeFilm: {
        id: 269149,
        title: 'Zootopia',
        tagline: 'Welcome to the urban jungle.',
        vote_average: 7.7,
        vote_count: 6795,
        release_date: '2016-02-11',
        poster_path: 'https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg',
        overview: 'Determined to prove herself, Officer Judy Hopps,',
        budget: 150000000,
        revenue: 1023784195,
        genres: ['Animation', 'Adventure', 'Family', 'Comedy'],
        runtime: 108,
      },
    };

    expect(movie(initialState, action)).toEqual({
      ...initialState,
      activeFilm: action.activeFilm,
      loading: false,
    });
  });

  it('SEARCH_BUTTON_CLICK', () => {
    const initialState = {
      activeFilm: {
        id: 11031,
        title: 'This Is Spinal Tap',
        tagline: "Does for rock & roll what 'The Sound of Music' did for hills.",
        vote_average: 7.7,
        vote_count: 517,
        release_date: '1984-05-04',
        poster_path: 'https://image.tmdb.org/t/p/w500/2VDPeoPJ2bKdmfuJxxCktx1hr5g.jpg',
        overview: '"This Is Spinal Tap"',
        budget: 2500000,
        revenue: 4736202,
        genres: ['Comedy', 'Music'],
        runtime: 82,
      },
    };

    const action = {
      type: SEARCH_BUTTON_CLICK,
    };

    expect(movie(initialState, action)).toEqual({
      ...initialState,
      activeFilm: null,
    });
  });
});
