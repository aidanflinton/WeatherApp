import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState, useEffect, useRef } from "react";
import '../App.css';
import Location from './Location.js';

function Weather (props) {
    const [loc, setLoc] = useState(null);

    const textFieldRef = useRef();

    const handleClick = (param) => {
        setLoc(param);
    }

    return(
    <>
        <>
            <TextField id="location" label="Location" type="search" helperText="Zip Code" inputRef={textFieldRef}/>
            <Button variant="contained" size="large" onClick={() => handleClick(textFieldRef.current.value)}>Log Input</Button>

            <Button variant="contained" size="large" endIcon={<LocationOnIcon onClick={() => handleClick("Current Location")}/>}>
                Current Location
            </Button>

            <Location>location={loc}</Location>
        </>
    </>
    );
}

export default Weather;