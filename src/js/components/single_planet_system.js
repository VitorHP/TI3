import React, { PropTypes } from 'react';
import Fleet from './fleet';

import DefaultSystemShape from './default_system_shape';
import Planet from './planet';

export default function SinglePlanetSystem(props) {
  const { hex, layout, systemTroops, planets } = props;
  const planetKeys = Object.keys(planets);

  return (
    <DefaultSystemShape hex={hex} layout={layout}>
      <Fleet troops={systemTroops}/>
      <Planet {...planets[planetKeys[0]]}/>
    </DefaultSystemShape>
  )
}

SinglePlanetSystem.propTypes = {
  systemTroops: PropTypes.object.isRequired,
  planets: PropTypes.object.isRequired,
}
