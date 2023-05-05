import React, {useEffect, useState} from "react";
import {getStory} from "../services/newsApiService";
import {Link} from "react-router-dom";
import {Card, CardActionArea, CardContent, Grid, Typography} from "@mui/material";
import {mapTime} from "../mappers/mapTime";

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(response => response && response.url && setStory(response))
    }, []);

    return story && story.url ? (
        <>
            <Grid item xs={2} sm={4} md={4} key={storyId}>
                <Link underline='none' to={"/" + storyId} style={{textDecoration: "none"}}>
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {story.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Score: {story.score}
                                    By: {story.by}
                                    Posted: {mapTime(story.time)}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </Grid>
        </>
    ) : null;
}
