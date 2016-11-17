import React, { PropTypes } from 'react';
import Fleet from './fleet';

import HomeSystemShape from './home_system_shape';
import SystemLabel from './system_label';
import Planet from './planet';

export default function SinglePlanetHomeSystem(props) {
  const { hex, layout, homeOwner, systemTroops, planets } = props;
  const planetKeys = Object.keys(planets);

  return (
    <HomeSystemShape hex={hex} layout={layout}>
      <Fleet troops={systemTroops}/>
      <Planet {...planets[planetKeys[0]]}/>
      <SystemLabel label={homeOwner.name}/>
    </HomeSystemShape>
  )
}

SinglePlanetHomeSystem.propTypes = {
  homeOwner: PropTypes.object.isRequired,
  systemTroops: PropTypes.object.isRequired,
  planets: PropTypes.object.isRequired,
}
