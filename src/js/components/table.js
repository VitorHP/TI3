import React, { Component, PropTypes } from 'react';
import HexGrid from './hexgrid/HexGrid';

import GroundForces from './ground_forces';
import Pds from './pds';
import Fighter from './fighter';
import Destroyer from './destroyer';
import Cruiser from './cruiser';
import Carrier from './carrier';
import Dreadnought from './dreadnought';
import WarSun from './war_sun';
import SpaceStation from './space_station';

class Table extends Component {
  render() {
    const { config } = this.props;
    const { hexagons, layout } = HexGrid.generate(config);

    return (
      <div className="row">
        <div className="col-md-12 map">
          <svg width="100%"
              height="1000px"
              xmlns="http://www.w3.org/2000/svg">
            <GroundForces transform="translate(0, 0)" />
            <Pds transform="translate(100, 0)" />
            <Fighter transform="translate(200, 0)"/>
            <Destroyer transform="translate(300, 0)"/>
            <Cruiser transform="translate(400, 0)"/>
            <Carrier transform="translate(500, 0)"/>
            <Dreadnought transform="translate(600 0)"/>
            <WarSun transform="translate(700, 0)"/>
            <SpaceStation transform="translate(800, 0)"/>
          </svg>
        </div>
      </div>
    )
  }
}

export default Table;
            // <HexGrid width={config.width} height={config.height} hexagons={hexagons} layout={layout} />
