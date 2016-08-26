import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SC from 'node-soundcloud';
import Loading from 'react-loading';

var client_id = 'YOUR SOUNDCLOUD APP ID';

SC.init({
  id: client_id
});

class Main extends Component {
  constructor(props){
    super();

    this.state = {
      query: '',
      hasResults: false,
      searchResults: [],
      isLoading: false
    };
  }

  handleTextChange(event){
    this.setState({
      query: event.target.value
    });
    if(event.key === 'Enter'){
      this.search.call(this);
    }
  }

  render(){
    return (
      <div>
        <h1 className="app-title">AGAIN</h1>
      </div>
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);
