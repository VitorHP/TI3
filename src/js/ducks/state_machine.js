
export const TRANSITION = 'ti3/state-machine/TRANSITION';

const initialState = {
  currentState: "no-game",
  states:[
    "no-game",
    "strategy-phase",
    "action-phase",
    "status-phase",
    "end-game"
  ],
  transitions: {
    "no-game" : ["strategy-phase"],
    "strategy-phase" : ["action-phase"],
    "action-phase" : ["status-phase"],
    "status-phase" : ["end-game"],
  }
}

function canTransitionTo(state, newState) {
  return state
    .transitions[state.currentState]
    .filter((s) => s === newState )
    .length > 0
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TRANSITION:
      return canTransitionTo(state, action.to) ?
        { ...state, currentState: action.to } :
        state;
    default:
      return state;
  }
}

export function transition(toState) {
  return {
    type: TRANSITION,
    to: toState
  }
}
