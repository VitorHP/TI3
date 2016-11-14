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

import Layout from '../components/hexgrid/Layout';
import Hex from '../components/hexgrid/Hex';

class Table extends Component {
  render() {
    const { hexagons, layout, config } = this.props;

    const _hexagons = hexagons.map((h) => {
      const { q, r, s, props } = h;

      return new Hex(q, r, s, props);
    })
    const _layout = new Layout(layout, config.origin)

    return (
      <div className="row">
        <div className="col-md-12 map">
          <HexGrid
            width={config.width}
            height={config.height}
            hexagons={_hexagons}
            layout={_layout} />
        </div>
      </div>
    )
  }
}

export default Table;
  // <Pds transform="scale(.5),translate(100, 0)" />
  // <Fighter transform="scale(.5),translate(200, 0)"/>
  // <Destroyer transform="scale(.5),translate(300, 0)"/>
  // <Cruiser transform="scale(.5),translate(400, 0)"/>
  // <Carrier transform="scale(.5),translate(500, 0)"/>
  // <Dreadnought transform="scale(.5),translate(600 0)"/>
  // <WarSun transform="scale(.5),translate(700, 0)"/>
  // <SpaceStation transform="scale(.5),translate(800, 0)"/>
