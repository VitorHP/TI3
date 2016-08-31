import { CHANGE_TITLE } from './constants';

let initialState = {
  title: "Initial Title"
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return { title: action.payload }
      break;
    default:
      return state
  }
}
