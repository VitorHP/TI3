import React, { PropTypes } from 'react';

export default function SystemLabel(props){
  return (
    <foreignObject x={props.x} y={props.y}>
      <span className="system__label-wrapper">
        <span className="system__label">{props.label}</span>
      </span>
    </foreignObject>
  )
}

SystemLabel.propTypes = {
  label: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
}

SystemLabel.defaultProps = {
  x: -70,
  y: 88,
}
