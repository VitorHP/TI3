import React, { Component, PropTypes } from 'react';

export default function Table(props) {
  return (
    <div className="row">
      <div className="col-md-6 map">
        <h1 className="app-title">{props.title}</h1>
        <button onClick={props.talk}>Talk</button>
      </div>
      <div className="col-md-6 toolbox">
        <h1 className="app-title">Toolbox</h1>
        <button onClick={props.listen}>Listen</button>
        <h2>Say Hi!</h2>
        <button onClick={() => props.hello('Hello from client')}>Hello!</button>
      </div>
    </div>
  )
}
