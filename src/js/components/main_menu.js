import React from 'react';
import { Link } from 'react-router';

export default function MainMenu(props) {
  return (
    <ul>
      <li><Link to="/races">New Game</Link></li>
      <li><a>Load Game</a></li>
    </ul>
  )
}
