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

const triplePlanetHomeSystem = createSelector(
  [kind, homeOwner, systemTroops],
  (kind, homeOwner, systemTroops) => {
    return {
      kind,
      homeOwner,
      systemTroops,
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
