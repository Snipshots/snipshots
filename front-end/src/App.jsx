import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import Feed from './containers/feed';
// import 'App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div id='header'>
          <h1> Snipshots </h1>
        </div>
        <Feed />
        <div id='footer'>
          <h1> Footer </h1>
        </div>
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('root'));
export default App;
