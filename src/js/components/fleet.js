import React, { PropTypes } from 'react';

export default function Fleet(props) {
  const units = props.units
    .reduce((acc, u, i) => {
      acc[u] = acc[u] || 0;

      acc[u] += 1;

      return acc;
    }, {})

  const children = Object.keys(units)
    .map((u, i) => <span key={i} className={`fleet__unit unit sm ${u}`} >{units[u]}</span>);

  return (
    <foreignObject x={props.x} y={props.y}>
      <div className="fleet">
        <div className="fleet__inner">
          {children}
        </div>
      </div>
    </foreignObject>
  )
}

Fleet.propTypes = {
  units: PropTypes.array.isRequired,
  x: PropTypes.number,
  y: PropTypes.number
}

Fleet.defaultProps = {
  x: -70,
  y: -125
}
