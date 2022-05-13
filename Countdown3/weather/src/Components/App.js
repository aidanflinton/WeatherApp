import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';
import Weather from './Weather.js'
import LoadNews from './LoadNews.js'

function App() {
  return (
    <div className="App">
      <header className = "App-header">
        Weather
      </header>
      <>
        <Weather></Weather>
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

//<Weather></Weather>