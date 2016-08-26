import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProgressSoundPlayer from './components/ProgressSoundPlayer';
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

  search(){
    this.setState({
      isLoading: true
    });

    SC.get('/tracks', {
      q: this.state.query,
      embeddable_by: 'all'
    }, (err, tracks) => {
      if(!err){
        this.setState({
          hasResults: true,
          searchResults: tracks,
          isLoading: false
        });
      }
    });
  }

  render(){
    return (
      <div>
        <h1>AGAIN AND AGAIN AND AGAIN</h1>
      </div>
    );
  }

  renderNoSearchResults(){
    return (
      <div id="no-results"></div>
    );
  }

  renderSearchResults(){
    return (
      <div id="search-results">
        {this.state.searchResults.map(this.renderPlayer.bind(this))}
      </div>
    );
  }

  renderPlayer(track){
    return (
        <h1> Hey Ho</h1>
    );
  }
}

var main = document.getElementById('main');
ReactDOM.render(<Main />, main);
