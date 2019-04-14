import {
    SAVE_TERM,
    TOGGLE_SEARCH_BY,
    TOGGLE_SORT_BY,
    TOGGLE_SORT_ORDER,
    CHANGE_PAGE,
    CHANGE_ITEMS_PER_PAGE,
    CHANGE_OFFSET,
} from '../constants';

const initialState = {
    currentPage: 1,
    moviesPerPage: 12,
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'asc',
    offset: 0,
    term: '',
};

const search = (state=initialState, { type, term, searchBy, sortBy, sortOrder, currentPage, moviesPerPage }) => {
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
         case CHANGE_PAGE : {
            return {
                ...state,
                currentPage,
            }
         }
         case CHANGE_ITEMS_PER_PAGE : {
            return {
                ...state,
                moviesPerPage,
            }
         }
         case CHANGE_OFFSET : {
            return {
                ...state,
                offset:(state.currentPage-1)*state.moviesPerPage,
            }
         }
        default:
            return state;

    }
}

export default search;