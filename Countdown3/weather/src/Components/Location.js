import * as React from 'react';
import { useState, useEffect } from "react";
import '../App.css';
import WeatherCalc from './WeatherCalc.js';

function Location(props) {
    const openweather_key = process.env.REACT_APP_openweather_key;

    console.log(props.location);

    const url = new URL("http://api.openweathermap.org/geo/1.0/zip")
    url.searchParams.append("zip", props.location + ",US");
    url.searchParams.append("appid", openweather_key);


    const [locData, setLocData] = useState();

    const generateLocation = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setLocData(data));
      }
    
      useEffect(() => {
        generateLocation()
      }, [])

      if(locData){
        console.log(locData);
        console.log(url);
        return (
        <div className="App">
            {locData.lat}
            {locData.lon}
            <WeatherCalc longitude={locData.lon} latitude={locData.lat}/>
        </div>
        );
      }
      else{
          return(
            <>
                <h2>Loading...</h2>
            </>
          );
      }
  }
  
  export default Location;