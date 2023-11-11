// frontend/src/store/index.js

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import frogReducer from './frog';
import logger from 'redux-logger'

const rootReducer = combineReducers({
  frog: frogReducer
});


let enhancer = applyMiddleware(thunk);
let middleware = [thunk];

// In development, use redux-logger and devtools
if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware = [...middleware, logger]; // Add redux-logger to middleware array
  enhancer = composeEnhancers(applyMiddleware(...middleware));
} else {
  enhancer = applyMiddleware(...middleware);
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;