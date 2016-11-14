import { CHANGE_TITLE } from '../constants';
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import GridGenerator from '../components/hexgrid/GridGenerator';

const gridConfig = {
  width: 800,
  height: 800,
  origin: { x: 0, y: 0 },
  map: 'hexagon',
  mapProps: [ 3 ]
}
// GridGenerator
//       .getGenerator(gridConfig.map)
//       .apply(this, gridConfig.mapProps)
let initialState = {
  title: "Initial Title",
  planets: [
    {
      name: "Arretze",
      slug: "arretze",
    },
    {
      name: "Hercant",
      slug: "hercant",
    },
    {
      name: "Kamdorn",
      slug: "kamdorn",
    },
  ],
  races: [
    {
      name: "Emirates of Hacan",
      slug: "hacan",
    }
  ],
  grid: {
    config: gridConfig,
    hexagons: [
      {
        q: -3,
        r: 0,
        s: 3,
      },
      {
        q: -3,
        r: 1,
        s: 2
      },
      {
        q: -3,
        r: 2,
        s: 1
      },
      {
        q: -3,
        r: 3,
        s: 0
      },
      {
        q: -2,
        r: -1,
        s: 3,
        props: {
          home: "hacan",
          troops: [{
            owner: "hacan",
            units: ["fighter", "pds", "ground-force", "carrier"],
          }],
          planets: [{
            slug: "arretze",
            owner: "hacan",
            troops: [{
              owner: "hacan",
              units: ["ground-forces", "ground-forces", "pds", "space-dock"]
            }]
          },
          {
            slug: "hercant",
            owner: "hacan",
            troops: [{
              owner: "hacan",
              units: ["ground-forces", "ground-forces"]
            }]
          },
          {
            slug: "kamdorn",
            owner: "hacan",
          }],
        }
      },
      {
        q: -2,
        r: 0,
        s: 2
      },
      {
        q: -2,
        r: 1,
        s: 1
      },
      {
        q: -2,
        r: 2,
        s: 0
      },
      {
        q: -2,
        r: 3,
        s: -1
      },
      {
        q: -1,
        r: -2,
        s: 3
      },
      {
        q: -1,
        r: -1,
        s: 2
      },
      {
        q: -1,
        r: 0,
        s: 1
      },
      {
        q: -1,
        r: 1,
        s: 0
      },
      {
        q: -1,
        r: 2,
        s: -1
      },
      {
        q: -1,
        r: 3,
        s: -2
      },
      {
        q: 0,
        r: -3,
        s: 3
      },
      {
        q: 0,
        r: -2,
        s: 2
      },
      {
        q: 0,
        r: -1,
        s: 1
      },
      {
        q: 0,
        r: 0,
        s: 0
      },
      {
        q: 0,
        r: 1,
        s: -1
      },
      {
        q: 0,
        r: 2,
        s: -2
      },
      {
        q: 0,
        r: 3,
        s: -3
      },
      {
        q: 1,
        r: -3,
        s: 2
      },
      {
        q: 1,
        r: -2,
        s: 1
      },
      {
        q: 1,
        r: -1,
        s: 0
      },
      {
        q: 1,
        r: 0,
        s: -1
      },
      {
        q: 1,
        r: 1,
        s: -2
      },
      {
        q: 1,
        r: 2,
        s: -3
      },
      {
        q: 2,
        r: -3,
        s: 1
      },
      {
        q: 2,
        r: -2,
        s: 0
      },
      {
        q: 2,
        r: -1,
        s: -1
      },
      {
        q: 2,
        r: 0,
        s: -2
      },
      {
        q: 2,
        r: 1,
        s: -3
      },
      {
        q: 3,
        r: -3,
        s: 0
      },
      {
        q: 3,
        r: -2,
        s: -1
      },
      {
        q: 3,
        r: -1,
        s: -2
      },
      {
        q: 3,
        r: 0,
        s: -3
      }
    ],
    layout: { width: 150, height: 150, flat: true, spacing: 1.02 },
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
