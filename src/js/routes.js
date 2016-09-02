import React from 'react';
import { IndexRoute, Route } from 'react-router';
import LobbyContainer from './containers/lobby_container';
import AppContainer from './containers/app_container';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={LobbyContainer}/>
  </Route>
)
