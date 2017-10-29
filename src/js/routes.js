import React from 'react';
import { IndexRoute, Route } from 'react-router';
import LobbyContainer from './containers/lobby_container';
import TableContainer from './containers/table_container';
import AppContainer from './containers/app_container';
import MainMenu from './components/main_menu';
import RacesScreenContainer from './containers/races_screen_container';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={MainMenu}/>
    <Route path="races" component={RacesScreenContainer}/>
    <Route path="table" component={TableContainer}/>
  </Route>
)
