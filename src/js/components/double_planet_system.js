import React, { PropTypes } from 'react';
import Fleet from './fleet';

import DefaultSystemShape from './default_system_shape';
import DoublePlanet from './double_planet';

export default function DoublePlanetSystem(props) {
  const { hex, layout, systemTroops, planets } = props;

  return (
    <DefaultSystemShape hex={hex} layout={layout}>
      <Fleet troops={systemTroops}/>
      <DoublePlanet planets={planets} />
    </DefaultSystemShape>
  )
}

DoublePlanetSystem.propTypes = {
  systemTroops: PropTypes.object.isRequired,
  planets: PropTypes.object.isRequired,
}
