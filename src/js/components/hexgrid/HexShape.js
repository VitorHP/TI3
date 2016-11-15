import React from 'react';
const { object } = React.PropTypes

import HexPattern from './HexPattern';
import HexPointers from './HexPointers';
import HexUtils from './HexUtils';

class HexShape extends React.Component {
  getPoints() {
    let points = this.props.layout.getPolygonPoints(this.props.hex)

    return points.map(point => {
      return point.x + ',' + point.y;
    }).join(' ');
  }

  translate() {
    let hex = this.props.hex;
    let pixel = HexUtils.hexToPixel(hex, this.props.layout);
    return `translate(${pixel.x}, ${pixel.y})`;
  }

  getStyles() {
    return (this.props.hex.props == {} || typeof(this.props.hex.props.image) === "undefined") ? {} : { fill: 'url(#'+ HexUtils.getID(this.props.hex) +')' };
  }
}

HexShape.propTypes = {
  hex: object.isRequired,
  layout: object.isRequired,
};

export default HexShape;
