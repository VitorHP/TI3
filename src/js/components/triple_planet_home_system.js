import React, { PropTypes } from 'react';

import HomeSystemShape from './home_system_shape';
import SystemLabel from './system_label';
import Planet from './planet';
import FleetContainer from '../containers/fleet_container';

export default function TriplePlanetHomeSystem(props) {
  const { hex, layout, homeOwner, systemTroops, planets } = props;
  const planetKeys = Object.keys(planets);

  return (
    <HomeSystemShape hex={hex} layout={layout}>
      <Planet x={-110} y={-10} {...planets[planetKeys[0]]}/>
      <Planet x={25} y={-10} {...planets[planetKeys[1]]}/>
      <Planet x={-50} y={-85} {...planets[planetKeys[2]]}/>
      <FleetContainer troops={systemTroops}/>
      <SystemLabel label={homeOwner.name}/>
    </HomeSystemShape>
  )
}

TriplePlanetHomeSystem.propTypes = {
  homeOwner: PropTypes.object.isRequired,
  systemTroops: PropTypes.object.isRequired,
  planets: PropTypes.object.isRequired,
}
