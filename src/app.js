import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loading from 'react-loading';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
const { ipcRenderer } = window.require('electron');

import { reducer } from './js/reducers';
import { ddp } from './js/ddp_reducer';
import { observeStore } from './js/ddp_observer';

import TableContainer from './js/components/table_container';

const logger = createLogger();

const red = combineReducers({
  local: reducer,
  shared: ddp
})

const store = createStore(
  red,
  applyMiddleware(logger)
);

ipcRenderer.on('ddp-receive', (event, state) => {
  console.log('sent to dispatcher', state)
  store.dispatch({ type: 'DDP_RECEIVE', payload: state })
})

function onChange(state) {
  ipcRenderer.send('asynchronous-message', { slug: 'ddp-send', payload: state })
}

let observer = observeStore(store, onChange);


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
        <TableContainer
          {...this.props}
          talk={this.talk.bind(this)}
          listen={this.listen.bind(this)}
          />
      </Provider>
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<App />, main);
