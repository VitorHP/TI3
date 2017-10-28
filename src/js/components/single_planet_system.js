import React, { PropTypes } from 'react';
import FleetContainer from '../containers/fleet_container';

import DefaultSystemShape from './default_system_shape';
import Planet from './planet';

export default function SinglePlanetSystem(props) {
  const { hex, layout, systemTroops, planets } = props;
  const planetKeys = Object.keys(planets);

  return (
    <DefaultSystemShape hex={hex} layout={layout}>
      <FleetContainer troops={systemTroops}/>
      <Planet {...planets[planetKeys[0]]}/>
    </DefaultSystemShape>
  )
}

SinglePlanetSystem.propTypes = {
  systemTroops: PropTypes.object,
  planets: PropTypes.object.isRequired,
}

SinglePlanetSystem.defaultProps = {
  systemTroops: {}
}
