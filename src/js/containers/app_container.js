import React, { Component, PropTypes } from 'react';

export default class AppContainer extends Component {
  render() {
    return (
      <div className="testing">
        {this.props.children}
      </div>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired
}
