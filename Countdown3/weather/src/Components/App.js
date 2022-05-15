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
      <>
        <LocInput></LocInput>
      </>
      <header className = "App-header">
        News
      </header>
      <>
        <LoadNews></LoadNews>
      </>
    </div>
  );
}

export default App;