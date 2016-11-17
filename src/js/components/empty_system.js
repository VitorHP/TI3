import React, { PropTypes } from 'react';
import FleetContainer from '../containers/fleet_container';

import DefaultSystemShape from './default_system_shape';

export default function TriplePlanetHomeSystem(props) {
  return (
    <DefaultSystemShape hex={props.hex} layout={props.layout}>
      <FleetContainer troops={{}}/>
      <text textAnchor="middle">{`${props.hex.q} ${props.hex.r} ${props.hex.s}`}</text>
    </DefaultSystemShape>
  )
}

TriplePlanetHomeSystem.propTypes = {
  homeOwner: PropTypes.string.isRequired,
}
