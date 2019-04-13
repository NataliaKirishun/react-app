import { combineReducers } from 'redux';
import movies from './movies';
import search from './search';

const rootReducers = combineReducers({ movies, search });

export default rootReducers;