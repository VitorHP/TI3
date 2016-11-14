import React, { Component, PropTypes } from 'react';
import HexGridContainer from './hexgrid_container';

class Table extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12 map">
          <HexGridContainer />
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
