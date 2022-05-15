import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import '../App.css';
import News from './News.js'

function LoadNews (props) {
    const [btn, setBtn] = useState(false);

    const handleClick = (param) => {
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