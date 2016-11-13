import React from 'react';
const { object } = React.PropTypes

import HexPattern from './HexPattern';
import HexPointers from './HexPointers';
import HexUtils from './HexUtils';
import Fleet from '../fleet';

class HexShape extends React.Component {

  getPoints(hex) {
    let points = this.props.layout.getPolygonPoints(hex)

    return points.map(point => {
      return point.x + ',' + point.y;
    }).join(' ');
  }

  translate() {
    let hex = this.props.hex;
    let pixel = HexUtils.hexToPixel(hex, this.props.layout);
    return `translate(${pixel.x}, ${pixel.y})`;
  }

  getStyles(hex) {
    return (hex.props == {} || typeof(hex.props.image) === "undefined") ? {} : { fill: 'url(#'+ HexUtils.getID(hex) +')' };
  }

  render() {
    let hex = this.props.hex;
    let text = (hex.props.text) ? hex.props.text : HexUtils.getID(hex);
    let actions = this.props.actions;
    let styles = this.getStyles(hex);
    let points = this.getPoints(hex);
    return (
      <g className="shape-group" transform={this.translate()} draggable="true">
        <HexPattern hex={hex} />
        <polygon points={points} style={styles} />
        <HexPointers hex={hex} points={points} />
        <text x="0" y="0.3em" textAnchor="middle">{text}</text>
        <foreignObject x="-70" y="-125">
          <Fleet units={['fighter', 'fighter', 'fighter', 'fighter', 'pds', 'carrier', 'war-sun', 'destroyer', 'dreadnought', 'cruiser']}/>
        </foreignObject>
      </g>
    );
  }
}

HexShape.propTypes = {
  hex: object.isRequired,
  layout: object.isRequired,
};

export default HexShape;
