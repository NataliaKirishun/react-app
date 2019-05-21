import { all } from 'redux-saga/effects';

import {moviesSaga} from "./moviesSaga";
import {movieSaga} from "./movieSaga";

function* rootSaga() {
  yield all([
    moviesSaga(),
    movieSaga(),
  ]);
};

export {rootSaga};