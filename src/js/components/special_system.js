import React, { PropTypes } from 'react';
import Fleet from './fleet';
import SpecialSystemShape from './special_system_shape';

export default function SpecialSystem(props) {
  return (
    <SpecialSystemShape hex={props.hex} layout={props.layout}>
      <text x="0" y="120" textAnchor="middle" >{props.hex.props.name}</text>
    </SpecialSystemShape>
  )
}

SpecialSystem.propTypes = {
  homeOwner: PropTypes.string.isRequired,
}
