import * as React from 'react';
import { useState, useEffect} from "react";
import '../App.css';
import WeatherDisp from './WeatherDisp.js';

function WeatherCalc (props) {
    const openweather_key = process.env.REACT_APP_openweather_key;

    const url = new URL("https://api.openweathermap.org/data/2.5/onecall")
    url.searchParams.append("lat", props.latitude);
    url.searchParams.append("lon", props.longitude);
    url.searchParams.append("appid", openweather_key);
    url.searchParams.append("units", "imperial");


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

        let currentData = weatherData.current;
        let hourlyData = weatherData.hourly;
        let dailyData = weatherData.daily;

        return (
        <div className="App">
            <WeatherDisp weather={[currentData, hourlyData, dailyData]} />
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