import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import configureStore from '../store/configure_store';
import { syncHistoryWithStore  } from 'react-router-redux';
import { observeStore } from '../ddp_observer';
import routes from '../routes';

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

class App extends Component {
  talk() {
    ipcRenderer.send('asynchronous-message', { slug: 'start-ddp-server'  });
  }

  listen() {
    ipcRenderer.send('asynchronous-message', { slug: 'start-ddp-client'  });
  }

  render(){
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<App />, main);

// const { ipcRenderer } = window.require('electron');
// ipcRenderer.on('ddp-receive', (event, state) => {
//   console.log('sent to dispatcher', state)
//   store.dispatch({ type: 'DDP_RECEIVE', payload: state })
// })
// function onChange(state) {
//   ipcRenderer.send('asynchronous-message', { slug: 'ddp-send', payload: state })
// }
// let observer = observeStore(store, onChange);

