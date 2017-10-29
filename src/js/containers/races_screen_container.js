
import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import RacesScreen from '../components/races_screen';

import { races } from '../selectors';

function mapStateToProps(state, props) {
  return {
    races: races(state.data)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RacesScreen);
