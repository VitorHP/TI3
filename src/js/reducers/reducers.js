import { CHANGE_TITLE } from '../constants';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

let initialState = {
  title: "Initial Title",
  config: {
    width: 800,
    height: 800,
    layout: { width: 10, height: 10, flat: true, spacing: 1.01 },
    origin: { x: 0, y: 0 },
    map: 'hexagon',
    mapProps: [ 3 ]
  }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return { title: action.payload }
      break;
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  reducer,
  routing
})
