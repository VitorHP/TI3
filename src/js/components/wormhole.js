import React, { PropTypes } from 'react';

export default function Wormhole(props) {
  const { x, y, kind} = props;

  return (
    <foreignObject x={props.x} y={props.y}>
      <div className={`wormhole sm ${kind}`}/>
    </foreignObject>
  )
}

Wormhole.propTypes = {
  kind: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
}
