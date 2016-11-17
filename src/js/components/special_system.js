import React, { PropTypes } from 'react';
import FleetContainer from '../containers/fleet_container';

import SpecialSystemShape from './special_system_shape';
import SystemLabel from './system_label';

export default function SpecialSystem(props) {
  return (
    <SpecialSystemShape hex={props.hex} layout={props.layout}>
      <SystemLabel label={props.hex.props.name}/>
    </SpecialSystemShape>
  )
}

SpecialSystem.propTypes = {
}
