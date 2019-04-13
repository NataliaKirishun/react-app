import {
    SAVE_TERM,
    TOGGLE_SEARCH_BY,
    TOGGLE_SORT_BY,
    TOGGLE_SORT_ORDER,
} from '../constants';

const initialState = {
    currentPage: 1,
    moviesPerPage: 10,
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'asc',
    offset: 0,
    term: '',
};

const search = (state=initialState, { type, term, searchBy, sortBy, sortOrder }) => {

    switch(type){
        case SAVE_TERM :
            return {
                ...state,
                term
            }
         case TOGGLE_SEARCH_BY :
            return {
                ...state,
                searchBy
            }
         case TOGGLE_SORT_BY :
            return {
                ...state,
                sortBy,
            }
         case TOGGLE_SORT_ORDER :
            return {
                ...state,
                sortOrder,
            }
        default:
            return state;

    }
}

export default search;