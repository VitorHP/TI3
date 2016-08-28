import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import Table from './table';

class TableContainer extends Component {
  render() {
    return (
      <Table title={this.props.title} ping={this.props.ping}>
      </Table>
    )
  }
}

function mapStateToProps(state, props) {
  const { title } = state;

  return {
    title
  }
}

export default connect(mapStateToProps)(TableContainer);
