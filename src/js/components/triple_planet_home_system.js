import React, { PropTypes } from 'react';
import Fleet from './fleet';

import HomeSystemShape from './home_system_shape';
import SystemLabel from './system_label';
import Planet from './planet';

export default function TriplePlanetHomeSystem(props) {
  return (
    <HomeSystemShape hex={props.hex} layout={props.layout}>
      <Fleet troops={props.hex.props.systemTroops}/>
      <Planet x={-110} y={-10} name={"Arretze"}/>
      <Planet x={25} y={-10} name={"Hercant"}/>
      <Planet x={-50} y={-85} name={"Kamdorn"}/>
      <SystemLabel label={props.hex.props.homeOwner.name}/>
    </HomeSystemShape>
  )
}

TriplePlanetHomeSystem.propTypes = {
  homeOwner: PropTypes.string.isRequired,
  systemTroops: PropTypes.array.isRequired
}
