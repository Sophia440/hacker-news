import React, {useEffect, useState} from "react";
import {getStory} from "../services/newsApiService";
import {Link, useParams} from "react-router-dom";
import {ROUTES} from "../constants/routes";
import {mapTime} from "../mappers/mapTime";

export const StoryPage = () => {
    const {storyId} = useParams();
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(response => response && response.url && setStory(response))
    }, []);

    return story && story.url ? (
        <>
            <Link to={ROUTES.root}>Home</Link>
            <a href={story.url}>
                <p>{story.title}</p>
            </a>
            By: <p>{story.by}</p>
            Posted: <p>{mapTime(story.time)}</p>
        </>
    ) : null;
}
