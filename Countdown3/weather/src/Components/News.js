import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
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
        console.log(newsData);

        newsData.forEach((element, index) =>  {
            if(element.media.length === 0){
                newsData[index].media = [
                    {
                        caption:"No image provided",
                        "media-metadata": [
                            {
                                url:"https://blog.logomyway.com/wp-content/uploads/2021/10/new-york-times-symbol.jpg"
                            }
                        ]
                    }
                ];
            }
          });


        return (
        <div className="App">
            <Grid
                container
                spacing={2}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
           {newsData.map((newsItem)=> 

            <Grid item xs={12} sm={6} md={3} key={newsData.indexOf(newsItem)}>

            <Card sx={{ minWidth: 275, maxWidth: 345}}>
                <CardMedia
                  component="img"
                  src={newsItem.media[0]["media-metadata"][0].url}
                  alt={newsItem.media[0].caption}
                />
                <CardHeader 
                    title={newsItem.title}
                    subheader={newsItem.byline}
                />
                <CardContent>
                    <Typography variant="body">
                        {newsItem.abstract}
                    </Typography>

                </CardContent>
                <CardActions>
                    <IconButton href={newsItem.url} aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
            </Grid>
           )}
           </Grid>
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