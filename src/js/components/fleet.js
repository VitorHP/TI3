import React from 'react';

export default function Fleet(props) {
  return (
    <div>
      <h1>Units</h1>
      <ul>
        <li>
          <span>Ground Forces</span>
          <i className="unit ground-forces"/>
        </li>
        <li>
          <span>PDS</span>
          <i className="unit pds"/>
        </li>
        <li>
          <span>Fighter</span>
          <i className="unit fighter"/>
        </li>
        <li>
          <span>Destroyer</span>
          <i className="unit destroyer"/>
        </li>
        <li>
          <span>Cruiser</span>
          <i className="unit cruiser"/>
        </li>
        <li>
          <span>Carrier</span>
          <i className="unit carrier"/>
        </li>
        <li>
          <span>Dreadnought</span>
          <i className="unit dreadnought"/>
        </li>
        <li>
          <span>WarSun</span>
          <i className="unit war-sun"/>
        </li>
        <li>
          <span>SpaceDock</span>
          <i className="unit space-dock"/>
        </li>
      </ul>

      <h1>Races</h1>
      <ul>
        <li>
          <span>Emirates of Hacan</span>
          <i className="race hacan"/>
        </li>
        <li>
          <span>The Mentak Coalition</span>
          <i className="race mentak"/>
        </li>
        <li>
          <span>Universities of Jol Nar</span>
          <i className="race jolnar"/>
        </li>
        <li>
          <span>Sardakk N'or</span>
          <i className="race sardakk"/>
        </li>
        <li>
          <span>The Xxcha Kingdom</span>
          <i className="race xxcha"/>
        </li>
        <li>
          <span>The Federation of Sol</span>
          <i className="race sol"/>
        </li>
        <li>
          <span>The Naalu Collective</span>
          <i className="race naalu"/>
        </li>
        <li>
          <span>The Yssaril Tribes</span>
          <i className="race yssaril"/>
        </li>
        <li>
          <span>The l1x1x Mindnet</span>
          <i className="race l1z1x"/>
        </li>
        <li>
          <span>The Barony of Letnev</span>
          <i className="race letnev"/>
        </li>
      </ul>
    </div>
  )
}
