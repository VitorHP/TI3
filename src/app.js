import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loading from 'react-loading';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { reducer } from './js/reducers';

import TableContainer from './js/components/table_container';

const { ipcRenderer } = window.require('electron');

const startDdpServer = () => {
  ipcRenderer.send('asynchronous-message', { type: 'start-ddp-server' });
}

const startDdpClient = () => {
  ipcRenderer.send('asynchronous-message', { type: 'start-ddp-client' });
}

const hello = (message) => {
  ipcRenderer.send('asynchronous-message', { type: 'say-hello', payload: message });
}

ipcRenderer.on('asynchronous-reply', (event, action) => {
  console.log(action)
})

ipcRenderer.on('hello-response', (event, action) => {
  console.log(action)
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
        <TableContainer
          talk={startDdpServer}
          listen={startDdpClient}
          hello={hello}
          {...this.props} />
      </Provider>
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<App />, main);
