import React from 'react';
import RaceProfile from './race_profile';

export default function RacesScreen(props) {
  return (
    <div className="races-screen">
      <h1>Choose your Race</h1>
      {props.races.map((race, i) => <RaceProfile key={i} {...race}/>)}
    </div>
  );
}
