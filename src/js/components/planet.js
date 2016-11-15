import React from 'react';

import Fleet from './fleet';

export default function Planet(props) {
  return (
    <svg x={props.x} y={props.y} height={100} width={200}>
      <g>
        <foreignObject width="96">
          <div className="system__planet">
            <i className="system__planet-icon planet sm"/>
            <div className="system__planet-name">{props.name}</div>
            <div className="system__planet-stats">
              <span className="system__planet-resources">3</span>
              <span className="system__planet-specialty"><i className="tech biologic"/></span>
              <span className="system__planet-influence">1</span>
            </div>
          </div>
        </foreignObject>
        <Fleet x={20} y={60} units={["ground-forces", 'pds', 'space-dock']} />
      </g>
    </svg>
  )
}
