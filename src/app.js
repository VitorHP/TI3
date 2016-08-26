import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loading from 'react-loading';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import { reducer } from './js/reducers';

import TableContainer from './js/components/table_container';

const logger = createLogger();

const store = createStore(
  reducer,
  applyMiddleware(logger)
);

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <TableContainer {...this.props} />
      </Provider>
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<App />, main);
