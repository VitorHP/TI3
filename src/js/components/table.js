import React, { Component, PropTypes } from 'react';

export default function Table(props) {
  return (
    <div className="row">
      <div className="col-md-6 map">
        <h1 className="app-title">{props.title}</h1>
        <h1 className="app-title">{props.sharedTitle}</h1>
      </div>
      <div className="col-md-6 toolbox">
        <button onClick={props.talk}>Talk</button>
        <button onClick={props.listen}>Listen</button>
        <button onClick={() => props.changeTitle('New local title')}>ChangeLocalTitle!</button>
        <button onClick={() => props.changeSharedTitle('New shared title')}>ChangeSharedTitle!</button>
      </div>
    </div>
  )
}
