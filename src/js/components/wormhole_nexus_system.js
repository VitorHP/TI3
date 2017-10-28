
import React, { PropTypes } from 'react';
import Fleet from './fleet';

import DefaultSystemShape from './default_system_shape';
import Wormhole from './wormhole';

export default function WormholeNexusSystem(props) {
  const { hex, layout, systemTroops, wormholes } = props;

  return (
    <DefaultSystemShape hex={hex} layout={layout}>
      <Fleet troops={systemTroops}/>
      <Wormhole x={10} y={0} kind={wormholes[0]}/>
      <Wormhole x={-75} y={-75} kind={wormholes[1]}/>
    </DefaultSystemShape>
  )
}

WormholeNexusSystem.propTypes = {
  systemTroops: PropTypes.object.isRequired,
  wormholes: PropTypes.array.isRequired,
}
