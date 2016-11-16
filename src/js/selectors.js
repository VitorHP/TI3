import { createSelector } from 'reselect';

const homeOwner = (system, state) => {
  return state.races[system.homeOwner];
}

const kind = (system, state) => {
  return system.kind;
}

const name = (system, state) => {
  return system.name;
}

const systemTroops = (system, state) => {
  return system.troops;
}

const planets = (system, state) => {
  return Object.keys(system.planets || {})
    .reduce((acc, p) => {
      acc[p] = {
        ...state.planets[p],
        owner: state.races[system.planets[p].owner],
        troops: system.planets[p].troops || {}
      }

      return acc;
    }, {})
}

const triplePlanetHomeSystem = createSelector(
  [kind, homeOwner, systemTroops, planets],
  (kind, homeOwner, systemTroops, planets) => {
    return {
      kind,
      homeOwner,
      systemTroops,
      planets,
    }
  }
)

const specialSystem = createSelector(
  [name, kind],
  (name, kind) => ({
    kind,
    name
  })
)

const noOpSystem = (system, state) => {
  return system;
}

const Selectors = {
  triplePlanetHomeSystem,
  specialSystem,
  noOpSystem,
}

export default Selectors;
