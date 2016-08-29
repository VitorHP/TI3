import React, { Component, PropTypes } from 'react';
import { connect } from "react-redux";
import Table from './table';

class TableContainer extends Component {
  render() {
    return (
      <Table
        title={this.props.title}
        talk={this.props.talk}
        listen={this.props.listen}
        hello={this.props.hello}
        >
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
