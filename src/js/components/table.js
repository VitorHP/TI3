import React, { Component, PropTypes } from 'react';

export default function Table(props) {
  return (
    <div className="row">
      <div className="col-md-9 map">
        <h1 className="app-title">{props.title}</h1>
        <button onClick={props.ping}>Click to Ping</button>
      </div>
      <div className="col-md-3 toolbox">
        <h1 className="app-title">Toolbox</h1>
      </div>
    </div>
  )
}
