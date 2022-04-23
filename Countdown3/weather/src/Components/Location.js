import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect, useRef } from "react";
import '../App.css';

function Location(props) {
    const openweather_key = process.env.REACT_APP_openweather_key;

    const url = new URL("http://api.openweathermap.org/geo/1.0/zip")
    url.searchParams.append("zip", props.location);
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
        return (
        <div className="App">
            {locData.lat};
            {locData.lon};
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