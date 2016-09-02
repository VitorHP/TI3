import { createStore, applyMiddleware } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import createLogger from 'redux-logger';
import { rootReducer } from '../reducers/reducers';

const logger = createLogger();

const router = routerMiddleware(hashHistory);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(router, logger))
}
