import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import search from './search';

const rootReducers = combineReducers({ movies, movie, search });

export default rootReducers;