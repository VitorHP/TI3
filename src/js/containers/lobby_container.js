import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { joinGame, createGame } from '../actions_local';

import Lobby from '../components/lobby';

function mapDispatchToProps(dispatch, props) {
  return {
    joinGame,
    createGame
  }
}

export default connect(mapDispatchToProps)(Lobby);
