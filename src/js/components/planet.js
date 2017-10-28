import React, { PropTypes } from 'react';

import FleetContainer from '../containers/fleet_container';

export default function Planet(props) {
  const { x, y, name, resources, influence, specialty, troops, owner } = props;

  const techSpecialty = specialty ? <span className={`tech ${specialty}`}/> : null;

  return (
    <svg x={x} y={y} height={100} width={200}>
      <g>
        <foreignObject width="96">
          <div className="system__planet">
            <i className={`system__planet-icon planet sm ${owner.color || 'white'}`}/>
            <div className="system__planet-name">{name}</div>
            <div className="system__planet-stats">
              <span className="system__planet-resources">{resources}</span>
              <span className="system__planet-specialty">{techSpecialty}</span>
              <span className="system__planet-influence">{influence}</span>
            </div>
          </div>
        </foreignObject>
        <FleetContainer x={20} y={60} troops={troops} />
      </g>
    </svg>
  )
}

Planet.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  name: PropTypes.string.isRequired,
  resources: PropTypes.number.isRequired,
  influence: PropTypes.number.isRequired,
  specialty: PropTypes.string,
  owner: PropTypes.object,
  troops: PropTypes.object,
}

Planet.defaultProps = {
  x: -45,
  y: -25,
  owner: {},
  troops: {}
}
