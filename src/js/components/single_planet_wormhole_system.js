import React, { PropTypes } from 'react';
import Fleet from './fleet';

import DefaultSystemShape from './default_system_shape';
import Planet from './planet';
import Wormhole from './wormhole';

export default function SinglePlanetWormholeSystem(props) {
  const { hex, layout, systemTroops, planets, wormholes } = props;
  const planetKeys = Object.keys(planets);

  return (
    <DefaultSystemShape hex={hex} layout={layout}>
      <Fleet troops={systemTroops}/>
      <Planet x={-100} y={-75} {...planets[planetKeys[0]]}/>
      <Wormhole x={10} y={0} kind={wormholes[0]}/>
    </DefaultSystemShape>
  )
}

SinglePlanetWormholeSystem.propTypes = {
  systemTroops: PropTypes.object.isRequired,
  planets: PropTypes.object.isRequired,
  wormholes: PropTypes.object.isRequired,
}
