import { CHANGE_TITLE } from '../constants';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import GridGenerator from '../components/hexgrid/GridGenerator';

const gridConfig = {
  width: 800,
  height: 800,
  origin: { x: 0, y: 0 },
  map: 'hexagon',
  mapProps: [ 1 ]
}

let initialState = {
  title: "Initial Title",
  grid: {
    config: gridConfig,
    hexagons: GridGenerator
      .getGenerator(gridConfig.map)
      .apply(this, gridConfig.mapProps),
    layout: { width: 10, height: 10, flat: true, spacing: 1.01 },
  },
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
