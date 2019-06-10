import search from './search';

import {
  SAVE_TERM,
  TOGGLE_SEARCH_BY,
  TOGGLE_SORT_BY,
  TOGGLE_SORT_ORDER,
  CHANGE_PAGE,
  CHANGE_ITEMS_PER_PAGE,
  CHANGE_OFFSET,
} from '../../constants/index';

const initialState = {
  currentPage: 1,
  moviesPerPage: 12,
  searchBy: 'title',
  sortBy: 'release_date',
  sortOrder: 'asc',
  offset: 0,
  term: '',
};

describe('search reducer', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual(initialState);
  });

  it('SAVE_TERM', () => {
    const action = {
      type: SAVE_TERM,
      term: 'movie',
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      term: action.term,
    });
  });

  it('TOGGLE_SEARCH_BY', () => {
    const action = {
      type: TOGGLE_SEARCH_BY,
      searchBy: 'genres',
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      searchBy: action.searchBy,
    });
  });

  it('TOGGLE_SORT_BY', () => {
    const action = {
      type: TOGGLE_SORT_BY,
      sortBy: 'vote_average',
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      sortBy: action.sortBy,
    });
  });

  it('TOGGLE_SORT_ORDER', () => {
    const action = {
      type: TOGGLE_SORT_ORDER,
      sortOrder: 'desc',
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      sortOrder: action.sortOrder,
    });
  });

  it('CHANGE_PAGE', () => {
    const action = {
      type: CHANGE_PAGE,
      currentPage: 2,
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      currentPage: action.currentPage,
    });
  });

  it('CHANGE_ITEMS_PER_PAGE', () => {
    const action = {
      type: CHANGE_ITEMS_PER_PAGE,
      moviesPerPage: 48,
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      moviesPerPage: action.moviesPerPage,
    });
  });

  it('CHANGE_OFFSET', () => {
    const action = {
      type: CHANGE_OFFSET,
    };

    expect(search(initialState, action)).toEqual({
      ...initialState,
      offset: (initialState.currentPage - 1) * initialState.moviesPerPage,
    });
  });
});
