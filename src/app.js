import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Loading from 'react-loading';

var client_id = 'YOUR SOUNDCLOUD APP ID';

class Main extends Component {
  constructor(props){
    super();
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-9 map">
          <h1 className="app-title">Map</h1>
        </div>
        <div className="col-md-3 toolbox">
          <h1 className="app-title">Toolbox</h1>
        </div>
      </div>
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);
