import ddp from './ddp_reducer';

let initialState = {
  title: "Initial Title"
}

export function reducer(state = initialState, action) {
  return ddp(state, action);
}
