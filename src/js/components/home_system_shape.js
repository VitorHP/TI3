import React from 'react';
import HexShape from './hexgrid/HexShape';

export default class HomeSystemShape extends HexShape {
  render () {
    return (
      <g className="shape-group" transform={this.translate()} draggable="true">
        <polygon points={this.getPoints()} className="system system--home" />
        {this.props.children}
      </g>
    )
  }
}
