import React, { Component, PropTypes } from 'react';
import HexGrid from './hexgrid/HexGrid';

import Fleet from './fleet';
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
          <Fleet />
        </div>
      </div>
    )
  }
}

export default Table;
            // <HexGrid width={config.width} height={config.height} hexagons={hexagons} layout={layout} />
            // <Pds transform="scale(.5),translate(100, 0)" />
            // <Fighter transform="scale(.5),translate(200, 0)"/>
            // <Destroyer transform="scale(.5),translate(300, 0)"/>
            // <Cruiser transform="scale(.5),translate(400, 0)"/>
            // <Carrier transform="scale(.5),translate(500, 0)"/>
            // <Dreadnought transform="scale(.5),translate(600 0)"/>
            // <WarSun transform="scale(.5),translate(700, 0)"/>
            // <SpaceStation transform="scale(.5),translate(800, 0)"/>
