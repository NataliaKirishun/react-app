import movie from './movie';

import {
    FETCH_MOVIE_SUCCESS,
    FETCH_SAME_GENRE_MOVIES_SUCCESS,
    SEARCH_BUTTON_CLICK,
} from '../constants';

const initialState = {
    activeFilm: null,
    sameGenresFilms: null,
};

describe('movie reducer', () => {

    it('should return the initial state', () => {
      expect(movie(undefined, {})).toEqual(initialState)
    })

    it('FETCH_MOVIE_SUCCESS', () => {

        const action = {
          type: FETCH_MOVIE_SUCCESS,
          activeFilm: {
              "id":11031,
              "title":"This Is Spinal Tap",
              "tagline":"Does for rock & roll what 'The Sound of Music' did for hills.",
              "vote_average":7.7,
              "vote_count":517,
              "release_date":"1984-05-04",
              "poster_path":"https://image.tmdb.org/t/p/w500/2VDPeoPJ2bKdmfuJxxCktx1hr5g.jpg",
              "overview":"\"This Is Spinal Tap\" shines a light on the self-contained universe of a metal band struggling to get back on the charts, including everything from its complicated history of ups and downs, gold albums, name changes and undersold concert dates, along with the full host of requisite groupies, promoters, hangers-on and historians, sessions, release events and those special behind-the-scenes moments that keep it all real.",
              "budget":2500000,
              "revenue":4736202,
              "genres":["Comedy","Music"],
              "runtime":82
          }
        }

        expect(movie(initialState, action)).toEqual({
          ...initialState,
          activeFilm:action.activeFilm,
        })
  })

    it('FETCH_SAME_GENRE_MOVIES_SUCCESS', () => {

        const action = {
            type: FETCH_SAME_GENRE_MOVIES_SUCCESS,
            sameGenresFilms:[{
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
            }]
        }

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            sameGenresFilms: action.sameGenresFilms,
        })
    })

    it('SEARCH_BUTTON_CLICK', () => {

        const initialState = {
            activeFilm: {
                "id":11031,
                "title":"This Is Spinal Tap",
                "tagline":"Does for rock & roll what 'The Sound of Music' did for hills.",
                "vote_average":7.7,
                "vote_count":517,
                "release_date":"1984-05-04",
                "poster_path":"https://image.tmdb.org/t/p/w500/2VDPeoPJ2bKdmfuJxxCktx1hr5g.jpg",
                "overview":"\"This Is Spinal Tap\" shines a light on the self-contained universe of a metal band struggling to get back on the charts, including everything from its complicated history of ups and downs, gold albums, name changes and undersold concert dates, along with the full host of requisite groupies, promoters, hangers-on and historians, sessions, release events and those special behind-the-scenes moments that keep it all real.",
                "budget":2500000,
                "revenue":4736202,
                "genres":["Comedy","Music"],
                "runtime":82
            },
            sameGenresFilms:[{
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
            }],
        };

        const action = {
            type: SEARCH_BUTTON_CLICK,
        }

        expect(movie(initialState, action)).toEqual({
            ...initialState,
            activeFilm: null,
            sameGenresFilms: null,
        })
    })

})

