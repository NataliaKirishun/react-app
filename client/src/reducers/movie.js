import { FETCH_MOVIE_SUCCESS } from '../constants';

const initialState = {
    activeFilm: null,
};

const movie = (state=initialState, { type, activeFilm }) => {
    switch (type) {
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                activeFilm
            }
         default :
         return state;
    }

}

export default movie;