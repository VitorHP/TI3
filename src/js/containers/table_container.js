import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Table from '../components/table';

function mapStateToProps(state, props) {
  return { }
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
