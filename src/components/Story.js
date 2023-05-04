import React, {useEffect, useState} from "react";
import {getStory} from "../services/newsApiService";
import {Link} from "react-router-dom";
import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import {mapTime} from "../mappers/mapTime";

export const Story = ({storyId}) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(response => response && response.url && setStory(response))
    }, []);

    return story && story.url ? (
        <>
            <Link underline='none' to={"/" + storyId}>
                <Card sx={{maxWidth: 345}}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {story.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                By: {story.by}
                                Posted: {mapTime(story.time)}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </>
    ) : null;
}
