import React, { PropTypes } from 'react';

import Planet from './planet';

export default function DoublePlanet(props) {
  const { planets } = props;
  const planetKeys = Object.keys(planets);

  return (
    <g>
      <Planet x={10} y={-10} {...planets[planetKeys[0]]}/>
      <Planet x={-100} y={-75} {...planets[planetKeys[1]]}/>
    </g>
  )
}

DoublePlanet.propTypes = {
  planets: PropTypes.object.isRequired,
}
