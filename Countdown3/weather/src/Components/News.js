import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useRef } from "react";
import '../App.css';

function News (props) {
    const nyt_key = process.env.REACT_APP_nyt_key;

    const url = new URL("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?")
    url.searchParams.append("api-key", nyt_key);

    const [newsData, setNews] = useState(null);

    const getNews = () => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setNews(data.results));
      }
    
      useEffect(() => {
        getNews();
      }, [])

      if(newsData){
        //console.log(newsData[0].media.media-metadata[0].url);
        return (
        <div className="App">
           {newsData.map((newsItem)=> 
           
            <Card sx={{ minWidth: 275 }}>
            <CardMedia
                component="img"
                height="140"
                image="{newsItem.media.media-metadata[0].url}"
                alt="green iguana"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {newsItem.title}
                </Typography>
                <Typography variant="h5" component="div">
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {newsItem.byline}
                </Typography>
                <Typography variant="body2">
                    {newsItem.abstract}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
           
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

export default News;


/*
<Button variant="contained" size="large" onClick={() => handleClick("Current Location")} endIcon={<LocationOnIcon />} >
Current Location
</Button>
*/