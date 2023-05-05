import React, {useEffect, useState} from "react";
import {getStory} from "../services/newsApiService";
import {useNavigate, useParams} from "react-router-dom";
import {mapTime} from "../mappers/mapTime";
import {Button, Typography} from "@mui/material";

export const StoryPage = () => {
    const navigate = useNavigate();
    const {storyId} = useParams();
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(response => response && response.url && setStory(response))
    }, []);

    return story && story.url ? (
        <>
            <Button variant="contained"
                    style={{marginTop: "20px"}}
                    onClick={() => navigate(-1)}>Back</Button>
            <Typography gutterBottom variant="h4" component="div" style={{marginTop: "20px"}}>
                {story.title}
            </Typography>
            <Typography variant="h5" color="text.secondary">
                <a href={story.url} target="_blank" rel="noreferrer">
                    Link
                </a>
            </Typography>
            <ul style={{listStyle: "none"}}>
                <li>
                    <Typography variant="h6" color="text.secondary">Score: {story.score}</Typography>
                </li>
                <li>
                    <Typography variant="h6" color="text.secondary">By: {story.by}</Typography>
                </li>
                <li>
                    <Typography variant="h6" color="text.secondary">Posted: {mapTime(story.time)}</Typography>
                </li>
            </ul>
        </>
    ) : null;
}
