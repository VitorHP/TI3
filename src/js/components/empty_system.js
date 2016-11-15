import React, { PropTypes } from 'react';
import Fleet from './fleet';

import DefaultSystemShape from './default_system_shape';

export default function TriplePlanetHomeSystem(props) {
  return (
    <DefaultSystemShape hex={props.hex} layout={props.layout}>
      <Fleet units={[]}/>
    </DefaultSystemShape>
  )
}

TriplePlanetHomeSystem.propTypes = {
  homeOwner: PropTypes.string.isRequired,
}
