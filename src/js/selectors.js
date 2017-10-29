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

const emptySystem = createStructuredSelector({
  kind,
  systemTroops
})

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

const ownedPlanets = (raceId) => {

}

const ownedTechnologies = (raceId) => {}

const race = (state, raceId) => ({
  ...state.races[raceId],
  startingTechnologies: state
    .races[raceId]
    .startingTechnologies
    .map((t) => {
      return state.technologies[t];
    }),
})

export const races = (state) => {
  return Object.keys(state.races || {})
    .map((r) => race(state, r), []);
}

const raceSheetUi = (state, raceId) => state.ui.raceSheets[raceId]

const Selectors = {
  triplePlanetHomeSystem,
  doublePlanetHomeSystem,
  singlePlanetHomeSystem,
  doublePlanetSystem,
  singlePlanetSystem,
  singlePlanetWormholeSystem,
  specialSystem,
  noOpSystem,
  emptySystem,
}

export default Selectors;
