import React, { Component, PropTypes } from 'react';
import HexGrid from './hexgrid/HexGrid';

class Table extends Component {
  render() {
    const { config } = this.props;
    const { hexagons, layout } = HexGrid.generate(config);

    return (
      <div className="row">
        <div className="col-md-6 map">
          <HexGrid width={config.width} height={config.height} hexagons={hexagons} layout={layout} />
        </div>
      </div>
    )
  }
}

export default Table;
