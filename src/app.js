import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loading from 'react-loading';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { reducer } from './js/reducers';

import TableContainer from './js/components/table_container';

const { ipcRenderer } = window.require('electron');

const pingMainProcess = () => {
  ipcRenderer.send('asynchronous-message', 'ping');
}

ipcRenderer.on('asynchronous-reply', (event, arg) => {
  console.log(arg) // prints "pong"
})

const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <TableContainer ping={pingMainProcess} {...this.props} />
      </Provider>
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<App />, main);
