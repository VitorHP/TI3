import { createSelector, createStructuredSelector } from 'reselect';

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
        owner: state.races[system.planets[p].owner] || {},
        troops: system.planets[p].troops || {}
      }

      return acc;
    }, {})
}

const wormholes = (system, state) => {
  return system.wormholes;
}

const triplePlanetHomeSystem = createStructuredSelector({
  kind,
  homeOwner,
  systemTroops,
  planets,
})

const doublePlanetHomeSystem = triplePlanetHomeSystem;
const singlePlanetHomeSystem = triplePlanetHomeSystem;

const doublePlanetSystem = createStructuredSelector({
  kind,
  systemTroops,
  planets,
})

const singlePlanetSystem = doublePlanetSystem;

const specialSystem = createStructuredSelector({
  kind,
  name
})

const singlePlanetWormholeSystem = createStructuredSelector({
  kind,
  planets,
  wormholes,
  systemTroops
})

const noOpSystem = (system, state) => {
  return system;
}

const Selectors = {
  triplePlanetHomeSystem,
  doublePlanetHomeSystem,
  singlePlanetHomeSystem,
  doublePlanetSystem,
  singlePlanetSystem,
  singlePlanetWormholeSystem,
  specialSystem,
  noOpSystem,
}

export default Selectors;
