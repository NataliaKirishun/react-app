import { createStore, compose, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, { END } from 'redux-saga';
import { rootReducer, rootSaga } from '.';

const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage,
// };

const composeEnhancers = process.env.NODE_ENV !== 'production'
&& typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

export default (initialState) => {
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);
  return store;
};
