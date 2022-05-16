import * as React from 'react';
import { useState, useEffect} from "react";
import '../App.css';
import WeatherDisp from './WeatherDisp.js';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { breadcrumbsClasses } from '@mui/material';

function WeatherCalc (props) {
    const openweather_key = process.env.REACT_APP_openweather_key;

    const url = new URL("https://api.openweathermap.org/data/2.5/onecall")
    url.searchParams.append("lat", props.latitude);
    url.searchParams.append("lon", props.longitude);
    url.searchParams.append("appid", openweather_key);
    url.searchParams.append("units", "imperial");


    const [weatherData, setWeatherData] = useState();
    const [period, setPeriod] = useState();

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

        let weather=[[weatherData.current], weatherData.daily, weatherData.hourly];

        return (
        <div className="App">
            {weather.map((time) =>           

              <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <WeatherDisp timeFrame={time}/>
                </Typography>
              </AccordionDetails>
              </Accordion>
            )}
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

