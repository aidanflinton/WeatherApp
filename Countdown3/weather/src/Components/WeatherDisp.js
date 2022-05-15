import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from "react";
import '../App.css';

function WeatherDisp (props) {
    return(
        <div className="App">
            
            <Card sx={{ minWidth: 275, maxWidth: 345}}>
                <CardMedia
                  component="img"
                  src= "http://openweathermap.org/img/wn/10d@2x.png"
                />
                <CardHeader 
                    title="Current"
                />
                <CardContent>
                    <Typography variant="body">
                        stuff
                    </Typography>

                </CardContent>
            </Card>
        
        </div>
    );
}

export default WeatherDisp;