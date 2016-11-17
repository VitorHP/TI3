import React, { PropTypes } from 'react';
import dashify from 'dashify';

export default function Fleet(props) {
  let key = 0;

  const units = Object.keys(props.troops)
    .reduce((acc, civ) => {
      acc[civ] = {
        ...props.troops[civ],
        units: props.troops[civ].units.reduce((acc, u, i) => {
          acc[u] = acc[u] || 0;

          acc[u] += 1;

          return acc;
        }, {})
      }

      return acc;
    }, {})

  const children = Object.keys(units)
    .map((civ) => {
      return Object.keys(units[civ].units)
        .map((u) => {
          const badge = units[civ].units[u] > 1 ? <span className="fleet__badge">{units[civ].units[u]}</span> : null;
          key += 1

          return <span key={key} className={`fleet__unit unit ${units[civ].color} sm ${dashify(u)}`}>
            {badge}
          </span>
        });
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
  troops: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number
}

Fleet.defaultProps = {
  x: -70,
  y: -125,
  troops: {}
}
