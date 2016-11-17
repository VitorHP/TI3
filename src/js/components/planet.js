import React, { PropTypes } from 'react';

import Fleet from './fleet';

export default function Planet(props) {
  const { x, y, name, resources, influence, specialty, troops } = props;

  const techSpecialty = specialty ? <span className={`tech ${specialty}`}/> : null;
  return (
    <svg x={x} y={y} height={100} width={200}>
      <g>
        <foreignObject width="96">
          <div className="system__planet">
            <i className="system__planet-icon planet sm"/>
            <div className="system__planet-name">{name}</div>
            <div className="system__planet-stats">
              <span className="system__planet-resources">{resources}</span>
              <span className="system__planet-specialty">{techSpecialty}</span>
              <span className="system__planet-influence">{influence}</span>
            </div>
          </div>
        </foreignObject>
        <Fleet x={20} y={60} troops={troops} />
      </g>
    </svg>
  )
}

Planet.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  resources: PropTypes.number.isRequired,
  influence: PropTypes.number.isRequired,
  specialty: PropTypes.string,
  troops: PropTypes.object,
}
