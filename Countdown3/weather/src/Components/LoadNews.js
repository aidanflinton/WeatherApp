import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect, useRef } from "react";
import '../App.css';
import { fabClasses } from '@mui/material';
import News from './News.js'

function LoadNews (props) {
    const [btn, setBtn] = useState(false);

    const handleClick = (param) => {
        setBtn(true);
        setBtn(true);
    }

    return (
        <>
            <Button variant="contained" size="large" onClick={() => handleClick()}>Load News</Button>

            {btn && <News>refresh={btn}</News>}
         </>
    );
}
export default LoadNews;