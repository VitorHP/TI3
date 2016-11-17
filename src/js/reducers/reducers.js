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
  units: {
    groundForces: {
      battle: 9,
    },
    cruiser: {
      battle: 7,
    },
    spaceDock: {
      battle: 0,
    },
    carrier: {
      battle: 9,
    },
    fighter: {
      battle: 9,
    }
  },
  planets: {
    zeroZeroZero: {
      name: "[0.0.0]",
      resources: 5,
      influence: 0
    },
    arcPrime: {
      name: "Arc Prime",
      resources: 4,
      influence: 0
    },
    arretze: {
      name: "Arretze",
      resources: 2,
      influence: 0
    },
    bereg: {
      name: "Bereg",
      resources: 3,
      influence: 1,
      specialty: "biologic",
    },
    hercant: {
      name: "Hercant",
      resources: 1,
      influence: 1
    },
    jord: {
      name: "Jord",
      resources: 4,
      influence: 2
    },
    kamdorn: {
      name: "Kamdorn",
      resources: 0,
      influence: 1
    },
    lodor: {
      name: "Lodor",
      resources: 3,
      influence: 1,
      specialty: "biologic",
    },
    lirtaIv: {
      name: "Lirta IV",
      resources: 2,
      influence: 3
    },
    tibah: {
      name: "Tibah",
      resources: 1,
      influence: 1
    },
    wrenTerra: {
      name: "Wren Terra",
      resources: 2,
      influence: 1
    },
  },
  races: {
    hacan: {
      name: "Emirates of Hacan",
    },
    letnev: {
      name: "Barony of Letnev",
    },
    l1z1x: {
      name: "L1z1x Mindnet",
    },
    sol: {
      name: "Federation of Sol",
    },
  },
  grid: {
    config: gridConfig,
    hexagons: [
      {
        q: -3,
        r: 0,
        s: 3,
        system: {
          kind: "SpecialSystem",
          name: "Super Nova"
        }
      },
      {
        q: -3,
        r: 1,
        s: 2,
        system: {
          kind: 'SinglePlanetSystem',
          troops: { },
          planets: {
            tibah: { },
          },
        }
      },
      {
        q: -3,
        r: 2,
        s: 1,
      },
      {
        q: -3,
        r: 3,
        s: 0,
        system: {
          kind: "SpecialSystem",
          name: "Asteroid Belt"
        }
      },
      {
        q: -2,
        r: -1,
        s: 3,
        system: {
          homeOwner: "hacan",
          kind: "TriplePlanetHomeSystem",
          troops: {
            hacan: ["groundForces", "groundForces", "groundForces", "groundForces", "carrier", "carrier", "fighter", "fighter", "cruiser"],
          },
          planets: {
            arretze: {
              owner: "hacan",
              troops: {
                hacan: ["spaceDock"],
              },
            },
            hercant: {
              owner: "hacan",
            },
            kamdorn: {
              owner: "hacan",
            }
          },
        }
      },
      {
        q: -2,
        r: 0,
        s: 2,
        system: {
          homeOwner: "hacan",
          kind: "DoublePlanetSystem",
          troops: { },
          planets: {
            bereg: { },
            lirtaIv: { },
          },
        }
      },
      {
        q: -2,
        r: 1,
        s: 1,
        system: {
          kind: 'SinglePlanetWormholeSystem',
          troops: { },
          planets: {
            lodor: { },
          },
          wormholes: ['alpha']
        }
      },
      {
        q: -2,
        r: 2,
        s: 0
      },
      {
        q: -2,
        r: 3,
        s: -1,
        system: {
          homeOwner: "sol",
          kind: "SinglePlanetHomeSystem",
          troops: {
            sol: ["groundForces", "groundForces", "groundForces", "groundForces", "groundForces", "carrier", "carrier", "destroyer"],
          },
          planets: {
            jord: {
              owner: "sol",
              troops: {
                sol: ["spaceDock"],
              },
            },
          },
        }
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
        s: 1,
        system: {
          homeOwner: "l1z1x",
          kind: "SinglePlanetHomeSystem",
          troops: {
            l1z1x: ["groundForces", "groundForces", "groundForces", "groundForces", "groundForces", "pds", "fighter", "fighter", "fighter", "carrier", "dreadnought"],
          },
          planets: {
            zeroZeroZero: {
              owner: "l1z1x",
              troops: {
                l1z1x: ["spaceDock"],
              },
            },
          },
        }
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
        s: -3,
        system: {
          homeOwner: "letnev",
          kind: "DoublePlanetHomeSystem",
          troops: {
            letnev: ["groundForces", "groundForces", "groundForces", "destroyer", "dreadnought", "carrier"],
          },
          planets: {
            arcPrime: {
              owner: "letnev",
              troops: {
                letnev: ["spaceDock"],
              },
            },
            wrenTerra: {
              owner: "letnev",
            },
          },
        }
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
