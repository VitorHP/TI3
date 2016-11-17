import React, { PropTypes } from 'react';
import Fleet from './fleet';

import DefaultSystemShape from './default_system_shape';
import Planet from './planet';
import Wormhole from './wormhole';

export default function DoublePlanetSystem(props) {
  const { hex, layout, systemTroops, planets } = props;
  const planetKeys = Object.keys(planets);

  return (
    <DefaultSystemShape hex={hex} layout={layout}>
      <Fleet troops={systemTroops}/>
      <Planet x={10} y={0} {...planets[planetKeys[0]]}/>
      <Planet x={-100} y={-75} {...planets[planetKeys[1]]}/>
      <Wormhole x={-50} y={0} kind={"alpha"} />
    </DefaultSystemShape>
  )
}

DoublePlanetSystem.propTypes = {
  systemTroops: PropTypes.object.isRequired,
  planets: PropTypes.object.isRequired,
}
