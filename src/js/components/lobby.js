import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';

export default function Lobby(props) {
  return (
    <div className="row">
      <div className="col-md-6">
        <h1>Local Game</h1>

        <h2>Join Game</h2>
        <form className="form">
          <div className="form-group">
            <label>Server IP</label>
            <input className="form-control" type="text"/>
          </div>
          <button onClick={() => props.dispatch(push('/table'))} className="btn btn-primary" type="submit">Join</button>
        </form>
        <br/>

        <h2>Create Game</h2>
        <form>
          <div className="form-group">
            <label>Your machine IP</label>
          </div>
          <button className="btn btn-primary" type="submit">Start</button>
        </form>

      </div>
      <div className="col-md-6">
        <div className="lobby__cool-image"/>
      </div>
    </div>
  )
}
