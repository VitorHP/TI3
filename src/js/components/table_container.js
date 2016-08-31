import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";

import { changeTitle } from '../actions_local';
import { changeSharedTitle } from '../actions_shared';

import Table from './table';

class TableContainer extends Component {
  changeTitle(newTitle) {
    this.props.dispatch(changeTitle(newTitle))
  }

  changeSharedTitle(newTitle) {
    this.props.dispatch(changeSharedTitle(newTitle))
  }

  render() {
    return (
      <Table
        {...this.props}
        changeTitle={this.changeTitle.bind(this)}
        changeSharedTitle={this.changeSharedTitle.bind(this)}>
      </Table>
    )
  }
}

function mapStateToProps(state, props) {
  const { title } = state.local;
  const { sharedTitle } = state.shared;

  return {
    title,
    sharedTitle
  }
}

export default connect(mapStateToProps)(TableContainer);
