import React, { PropTypes } from 'react';
import Fleet from './fleet';
import HomeSystemShape from './home_system_shape';

export default function TriplePlanetHomeSystem(props) {
  return (
    <HomeSystemShape hex={props.hex} layout={props.layout}>
      <text x="0" y="120" textAnchor="middle" >{props.hex.props.homeOwner.name}</text>
    </HomeSystemShape>
  )
}

TriplePlanetHomeSystem.propTypes = {
  homeOwner: PropTypes.string.isRequired,
}
