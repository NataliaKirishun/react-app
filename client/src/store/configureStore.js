import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const composeEnhancers = process.env.NODE_ENV !== 'production'
&& typeof window === 'object'
&& window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;


// export const store = createStore(
//   persistReducer(persistConfig, rootReducer),
//   composeEnhancers(applyMiddleware(thunk)),
// );

// export const persistor = persistStore(store);


export default (initialState) => {
  const store = createStore(  persistReducer(persistConfig, rootReducer),initialState, composeEnhancers(applyMiddleware(thunk)) );
  const persistor = persistStore(store);
  return {store, persistor};
};