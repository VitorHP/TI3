import React from 'react';

export default function Fleet(props) {
  const units = props.units.map((u, i) => <i key={i} className={`unit ${u}`} />);

  return (
    <div className="fleet">
      <div className="fleet__inner">
        {units}
      </div>
    </div>
  )
}
