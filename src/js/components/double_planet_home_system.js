import React, { PropTypes } from 'react';
import FleetContainer from '../containers/fleet_container';

import HomeSystemShape from './home_system_shape';
import SystemLabel from './system_label';
import DoublePlanet from './double_planet';

export default function DoublePlanetHomeSystem(props) {
  const { hex, layout, homeOwner, systemTroops, planets } = props;

  return (
    <HomeSystemShape hex={hex} layout={layout}>
      <FleetContainer troops={systemTroops}/>
      <DoublePlanet planets={planets} />
      <SystemLabel label={homeOwner.name}/>
    </HomeSystemShape>
  )
}

DoublePlanetHomeSystem.propTypes = {
  homeOwner: PropTypes.object.isRequired,
  systemTroops: PropTypes.object.isRequired,
  planets: PropTypes.object.isRequired,
}
