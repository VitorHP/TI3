import React from 'react'
const { number, object, bool, string, array } = React.PropTypes

import Path from './Path'
import Layout from './Layout'
import GridGenerator from './GridGenerator'

import Systems from '../../systems';

class HexGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      path: {start: null, end: null}
    };
  }

  render() {
    return (
      <div className="grid">
        <svg className="grid_svg" width="1800px" height="2000px" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(900, 1000)">
            {
              this.props.hexagons.map((hex, index) => {
                let HexFactory = Systems.EmptySystem;

                if (hex.props.kind !== undefined) {
                  HexFactory = Systems[hex.props.kind];
                }

                return (
                  <HexFactory key={index} hex={hex} layout={this.props.layout} />
                );
              })
            }
            <Path {...this.state.path} layout={this.props.layout} />
          </g>
        </svg>
      </div>
    );
  }

}

HexGrid.generate = (config, content) => {
  let layout = new Layout(config.layout, config.origin);
  let generator = GridGenerator.getGenerator(config.map);
  let hexagons = generator.apply(this, config.mapProps);

  return { hexagons, layout };
}

HexGrid.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  layout: object.isRequired,
  hexagons: array.isRequired
};

HexGrid.defaultProps = {
  width: 800,
  height: 600
}

export default HexGrid;
