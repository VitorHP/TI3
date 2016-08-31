const { ipcRenderer } = window.require('electron');

function select(state) {
  return state.shared;
}

export function observeStore(store, onChange) {
  let currentState;

  function handleChange() {
    let nextState = select(store.getState());
    console.log('checking for state changes')

    if (nextState !== currentState) {
      currentState = nextState;
      console.log('state changed')
      onChange(currentState);
    }
  }

  let unsubscribe = store.subscribe(handleChange);
  handleChange();
  return unsubscribe;
}
