import {
  call, put, all, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_MOVIES } from '../../constants/index';

import { updateMovies } from '../actions';

export function* fetchMoviesAsync(action) {
  const response = yield call(axios.get, action.url);
  const movies = yield response.data.data;
  const total = yield response.data.total;
  yield put(updateMovies(movies, total));
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, fetchMoviesAsync);
}

// Movies Saga
export function* moviesSaga() {
  yield all([
    watchFetchMovies(),
  ]);
}
