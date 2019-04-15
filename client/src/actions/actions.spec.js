import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

import {
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_SUCCESS,
    FETCH_SAME_GENRE_MOVIES_SUCCESS,
    FETCH_MOVIES_ERROR,
    SAVE_TERM,
    TOGGLE_SEARCH_BY,
    TOGGLE_SORT_BY,
    TOGGLE_SORT_ORDER,
    CHANGE_PAGE,
    CHANGE_ITEMS_PER_PAGE,
    CHANGE_OFFSET,
    SEARCH_BUTTON_CLICK,

} from '../constants';

import {
    fetchMoviesSuccess,
    fetchMovieSuccess,
    fetchSameGenreMovies,
    fetchSameGenreMoviesSuccess,
    fetchMoviesError,
    saveTerm,
    toggleSearchBy,
    toggleSortBy,
    toggleSortOrder,
    changePage,
    changeMoviesPerPage,
    changeOffset,
    searchButtonHandler,
    fetchMovie,
    fetchMovies,
    } from './index';

const mockMovies = [{
    "id":269149,
    "title":"Zootopia",
    "tagline":"Welcome to the urban jungle.",
    "vote_average":7.7,
    "vote_count":6795,
    "release_date":"2016-02-11",
    "poster_path":"https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
    "overview":"Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    "budget":150000000,
    "revenue":1023784195,
    "genres":["Animation","Adventure","Family","Comedy"],
    "runtime":108
},{
    "id":22,
    "title":"Pirates of the Caribbean: The Curse of the Black Pearl",
    "tagline":"Prepare to be blown out of the water.",
    "vote_average":7.5,
    "vote_count":8914,
    "release_date":"2003-07-09",
    "poster_path":"https://image.tmdb.org/t/p/w500/tkt9xR1kNX5R9rCebASKck44si2.jpg",
    "overview":"Jack Sparrow, a freewheeling 17th-century pirate, quarrels with a rival pirate bent on pillaging Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her.",
    "budget":140000000,
    "revenue":655011224,
    "genres":["Adventure","Fantasy","Action"],
    "runtime":143
}];

const mockMovie= {
    "id":269149,
    "title":"Zootopia",
    "tagline":"Welcome to the urban jungle.",
    "vote_average":7.7,
    "vote_count":6795,
    "release_date":"2016-02-11",
    "poster_path":"https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
    "overview":"Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    "budget":150000000,
    "revenue":1023784195,
    "genres":["Animation","Adventure","Family","Comedy"],
    "runtime":108
};

describe('actions creators', () => {

    it('fetchMoviesSuccess(): should fetch movies to show in the Main component', () => {
        const expectedAction = {
            type: FETCH_MOVIES_SUCCESS,
                movies: mockMovies,
                total:2,

        }
        expect(fetchMoviesSuccess(mockMovies,2)).toEqual(expectedAction)
    })

    it('fetchMovieSuccess(): should fetch target movie to show in the Header component', () => {
        const expectedAction = {
            type: FETCH_MOVIE_SUCCESS,
            activeFilm: mockMovie,
        };
        expect(fetchMovieSuccess(mockMovie)).toEqual(expectedAction)
    })

    it('fetchSameGenreMoviesSuccess(): should fetch movies the same genre with the target movie', () => {
        const expectedAction = {
            type: FETCH_SAME_GENRE_MOVIES_SUCCESS,
            sameGenresFilms: mockMovies,
        };
        expect(fetchSameGenreMoviesSuccess(mockMovies)).toEqual(expectedAction)
    })

    it('fetchMoviesError(): appear when there are any problems with fetching movies', () => {
        const expectedAction = {
            type: FETCH_MOVIES_ERROR,
        };
        expect(fetchMoviesError()).toEqual(expectedAction)
    })

    it('saveTerm(): save term for movie search in the store', () => {
        const expectedAction = {
            type: SAVE_TERM,
            term: 'hello',
        };
        expect(saveTerm('hello')).toEqual(expectedAction)
    })

    it('toggleSearchBy(): toggle search by condition', () => {
        const expectedAction = {
            type: TOGGLE_SEARCH_BY,
            searchBy: 'genres',
        };
        expect(toggleSearchBy('genres')).toEqual(expectedAction)
    })

    it('toggleSearchBy(): toggle search by condition', () => {
        const expectedAction = {
            type: TOGGLE_SEARCH_BY,
            searchBy: 'title',
        };
        expect(toggleSearchBy('title')).toEqual(expectedAction)
    })

    it('toggleSortBy(): toggle sort by condition', () => {
        const expectedAction = {
            type: TOGGLE_SORT_BY,
            sortBy: 'release_date',
        };
        expect(toggleSortBy('release_date')).toEqual(expectedAction)
    })

    it('toggleSortBy(): toggle sort by condition', () => {
        const expectedAction = {
            type: TOGGLE_SORT_BY,
            sortBy: 'vote_average',
        };
        expect(toggleSortBy('vote_average')).toEqual(expectedAction)
    })

    it('toggleSortOrder(): toggle sort order for search', () => {
        const expectedAction = {
            type: TOGGLE_SORT_ORDER,
            sortOrder: 'desc',
        };
        expect(toggleSortOrder('desc')).toEqual(expectedAction)
    })

    it('toggleSortOrder(): toggle sort order for search', () => {
        const expectedAction = {
            type: TOGGLE_SORT_ORDER,
            sortOrder: 'asc',
        };
        expect(toggleSortOrder('asc')).toEqual(expectedAction)
    })

    it('changePage(): change page action', () => {
        const expectedAction = {
            type: CHANGE_PAGE,
            currentPage: 10,
        };
        expect(changePage(10)).toEqual(expectedAction)
    })

    it('changeMoviesPerPage(): change movies per page action', () => {
        const expectedAction = {
            type: CHANGE_ITEMS_PER_PAGE,
            moviesPerPage: 48,
        };
        expect(changeMoviesPerPage(48)).toEqual(expectedAction)
    })

    it('changeOffset(): change offset for research', () => {
        const expectedAction = {
            type: CHANGE_OFFSET,
        };
        expect(changeOffset()).toEqual(expectedAction)
    })

    it('searchButtonHandler(): search button action', () => {
        const expectedAction = {
            type: SEARCH_BUTTON_CLICK,
        };

        expect(searchButtonHandler()).toEqual(expectedAction)
    })

});

describe('async actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates FETCH_MOVIE_SUCCESS after successfully fetching current movie', async (done) => {
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: mockMovie,
                });
            });

            const expectedActions = [
                { type: FETCH_MOVIE_SUCCESS,
                  activeFilm: mockMovie,
              },
            ];

            const store = mockStore({ movie: {
                activeFilm: null,
            }
            });

            await store.dispatch(fetchMovie()).then(() => {
                // return of async actions
                expect(store.getActions()).toEqual(expectedActions);
            });

            done();
        });

    it('creates FETCH_MOVIES_SUCCESS after clicking search submit button', async (done) => {

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    data:mockMovies,
                    total:2,
                }
            });
        });

        const expectedActions = [
            { type: FETCH_MOVIES_SUCCESS,
                movies: mockMovies,
                total:2,
            },
        ];

            const store = mockStore({});

           await store.dispatch(fetchMovies()).then(() => {
                // return of async actions
                expect(store.getActions()).toEqual(expectedActions);
        });

        done();
    });

    it('creates FETCH_SAME_GENRE_MOVIES_SUCCESS after clicking any film', async (done) => {

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: {
                        data:mockMovies,
                    }
                });
            });

            const expectedActions = [
                { type: FETCH_SAME_GENRE_MOVIES_SUCCESS,
                    sameGenresFilms: mockMovies,
                },
            ];

               const store = mockStore({});

               await store.dispatch(fetchSameGenreMovies()).then(() => {
                    // return of async actions
                    expect(store.getActions()).toEqual(expectedActions);
            });

            done();
        });
});