import { CHANGE_SHARED_TITLE } from './constants';

let initialState = {
  sharedTitle: "Shared title"
}

export function ddp(state = initialState, action) {
  switch (action.type) {
    case 'DDP_RECEIVE':
      return Object.assign({}, state, action.payload);
      break;
    case CHANGE_SHARED_TITLE:
      return Object.assign({}, state, { sharedTitle: action.payload });
      break;
    default:
      return state;
      break;
  }
}
