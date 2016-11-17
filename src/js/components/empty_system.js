import React, { PropTypes } from 'react';
import FleetContainer from '../containers/fleet_container';

import DefaultSystemShape from './default_system_shape';

export default function EmptySystem(props) {
  const { hex, layout } = props;

  return (
    <DefaultSystemShape hex={hex} layout={layout}>
      <text textAnchor="middle">{`${hex.q} ${hex.r} ${hex.s}`}</text>
    </DefaultSystemShape>
  )
}

EmptySystem.propTypes = {
}
