import React, { PropTypes } from 'react';

export default function RaceProfile(props) {
  const {
    key,
    name,
    slug,
    startingTechnologies,
    startingUnits,
    specialAbilities,
  } = props;

  return (
    <div key={key} className="race-profile">
      <div>{name}</div>
      <span>
        <img src={`races/${slug}.png`}/>
      </span>
      <span>
        <div>Unidades Iniciais</div>
        <ul>
          {startingUnits.map((unit) => <li>{unit}</li>)}
        </ul>
      </span>
      <span>
        <div>Tecnologias Iniciais</div>
        <ul>
          {startingTechnologies.map((tech) => <li>{tech.name}</li>)}
        </ul>
      </span>
      <span>
        <div>Habilidades Especiais</div>
        <ul>
          {specialAbilities.map((ab) => <li>{ab}</li>)}
        </ul>
      </span>
    </div>
  )
}

RaceProfile.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  startingTechnologies: PropTypes.array.isRequired,
  startingUnits: PropTypes.array.isRequired,
  specialAbilities: PropTypes.array.isRequired,
}
