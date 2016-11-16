import React, { PropTypes } from 'react';
import dashify from 'dashify';

export default function Fleet(props) {
  const units = Object.keys(props.troops)
    .reduce((acc, civ) => {
      acc[civ] = props.troops[civ].reduce((acc, u, i) => {
        acc[u] = acc[u] || 0;

        acc[u] += 1;

        return acc;
      }, {})

      return acc;
    }, {})

  const children = Object.keys(units)
    .map((civ) => {
      return Object.keys(units[civ])
        .map((u, i) =>
          <span key={i} className={`fleet__unit unit unit--${civ} sm ${dashify(u)}`}>
            {units[civ][u]}
          </span>
        );
    })
    .reduce((acc, civUnits) => acc.concat(civUnits), [])

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
  troops: PropTypes.object.isRequired,
  x: PropTypes.number,
  y: PropTypes.number
}

Fleet.defaultProps = {
  x: -70,
  y: -125
}
