import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";

import { changeTitle } from '../actions_local';
import { changeSharedTitle } from '../actions_shared';

import Table from '../components/table';

function mapStateToProps(state, props) {
  return {
  }
}

function mapDispatchToProps(state, props) {
  return {
    changeTitle,
    changeSharedTitle
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
