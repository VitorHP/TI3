import React, { PropTypes } from 'react';
import Fleet from './fleet';

import DefaultSystemShape from './default_system_shape';
import Wormhole from './wormhole';

export default function WormholeSystem(props) {
  const { hex, layout, systemTroops, wormholes } = props;

  return (
    <DefaultSystemShape hex={hex} layout={layout}>
      <Fleet troops={systemTroops}/>
      <Wormhole x={10} y={0} kind={wormholes[0]}/>
    </DefaultSystemShape>
  )
}

WormholeSystem.propTypes = {
  systemTroops: PropTypes.object.isRequired,
  wormholes: PropTypes.array.isRequired,
}
