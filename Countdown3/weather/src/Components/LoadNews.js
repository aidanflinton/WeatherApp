import * as React from 'react';
import Button from '@mui/material/Button';
import { useState } from "react";
import '../App.css';
import News from './News.js'

function LoadNews (props) {
    const [btn, setBtn] = useState(0);

    return (
        <>
            <Button variant="contained" size="large" onClick={() => setBtn(btn + 4)}>Load News</Button>

            {btn && <News>refresh={btn}</News>}
         </>
    );
}
export default LoadNews;