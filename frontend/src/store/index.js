// frontend/src/store/index.js

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import sessionReducer from './session';
// import searchReducer from './search';
import frogReducer from './frog';

const rootReducer = combineReducers({
  // session: sessionReducer,
  // search: searchReducer,
  frog: frogReducer
});

// Add any additional middleware like 'redux-logger' if not in production
let enhancer = applyMiddleware(thunk);

// In development, use redux devtools
if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(enhancer);
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
