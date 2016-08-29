import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFromDdp } from './actions';
const { ipcRenderer } = window.require('electron');

class DDPContainer extends Component {
  constructor(props) {
    super(props);

    ipcRenderer.on('ddp-receive', (event, action) => {
      console.log('sent to dispatcher')
      props.dispatch(updateFromDdp(action))
    })
  }

  talk() {
    ipcRenderer.send('asynchronous-message', { slug: 'start-ddp-server' });
  }

  listen() {
    ipcRenderer.send('asynchronous-message', { slug: 'start-ddp-client' });
  }

  send(action) {
    console.log('sent to ipc')
    ipcRenderer.send('asynchronous-message', { slug: 'ddp-send', payload: action.payload });
  }

  changeTitle() {
    console.log('calling send method')
    this.send({ payload: 'New Title OMG!' })
  }

  render() {
    return (
      <div className="ddp-container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="app-title">{this.props.title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 map">
            <button onClick={this.talk.bind(this)}>Talk</button>
          </div>
          <div className="col-md-6 toolbox">
            <button onClick={this.listen.bind(this)}>Listen</button>
          </div>
          <div className="row">
            <div className="col-md-12">
              <button onClick={this.changeTitle.bind(this)}>Change Title</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const { title } = state;

  return { title };
}

export default connect(mapStateToProps)(DDPContainer);
