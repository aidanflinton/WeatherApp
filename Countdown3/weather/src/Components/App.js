import React from 'react';
import '../App.css';
import {useEffect, useState} from 'react';
import Weather from './Weather.js'

function App() {
  return (
    <div className="App">
      <header className = "App-header">
        Weather
      </header>
      <>
        <Weather></Weather>
      </>
    </div>
  );
}

export default App;
