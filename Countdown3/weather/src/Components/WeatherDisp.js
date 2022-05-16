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
            <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justify="center"
            >
           {props.timeFrame.map((weatherItem)=> 

            <Grid item xs={12} sm={6} md={3} key={props.timeFrame.indexOf(weatherItem)}>

            <Card sx={{ minWidth: 275, maxWidth: 345}}>
                <CardMedia
                    component="img"
                    src={"http://openweathermap.org/img/wn/"+ weatherItem.weather[0].icon+"@2x.png"}
                    alt={weatherItem.weather[0].description}
                />
                <CardHeader 
                    title={"Temperature: " + weatherItem.temp+ "F"}
                    subheader={"Feels Like:" + weatherItem.feels_like + "F"}
                />
                <CardContent>
                    <Typography variant="body">
                        {weatherItem.weather[0].main}
                    </Typography>
                </CardContent>
            </Card>
            </Grid>
           )}
           </Grid>


        </div>
    );
}

export default WeatherDisp;


/*
<CardMedia
component="img"
src={newsItem.media[0]["media-metadata"][0].url}
alt={newsItem.media[0].caption}
/>
*/