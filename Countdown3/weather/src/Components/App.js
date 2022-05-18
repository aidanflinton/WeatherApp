import React from 'react';
import '../App.css';
import LocInput from './LocInput.js'
import LoadNews from './LoadNews.js'

function App() {
  return (
    <div className="App">
      <header className = "App-header">
        Weather
      </header>
      <div className="App-body">
        <LocInput></LocInput>
      </div>
      <header className = "App-header">
        News
      </header>
      <div className="App-body">
        <LoadNews></LoadNews>
      </div>
    </div>
  );
}

export default App;