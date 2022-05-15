import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect, useRef } from "react";
import '../App.css';

function WeatherCalc (props) {
    const openweather_key = process.env.REACT_APP_openweather_key;

    const url = new URL("https://api.openweathermap.org/data/2.5/onecall")
    url.searchParams.append("lat", props.latitude);
    url.searchParams.append("lon", props.longitude);
    url.searchParams.append("appid", openweather_key);


    const [weatherData, setWeatherData] = useState();

    const generateWeather = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setWeatherData(data));
      }
    
      useEffect(() => {
        generateWeather()
      }, [])

      if(weatherData){
        console.log(weatherData);
        console.log(url);
        return (
        <div className="App">
            {weatherData.current.clouds}
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

export default WeatherCalc;