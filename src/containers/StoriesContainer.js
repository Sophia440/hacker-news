import React, {useEffect, useState} from "react";
import {getStoryIds} from "../services/newsApiService";
import {Story} from "../components/Story";
import LoadMoreBtn from "../components/LoadMoreBtn";

export function StoriesContainer() {
    const [stories, setStories] = useState([]);
    const [storyIds, setStoryIds] = useState([]);
    const [visibleStoryIds, setVisibleStoryIds] = useState([]);
    const [storyCount, setStoryCount] = useState(15);

    useEffect(() => {
        getStoryIds().then(response => {
            if (response) {
                setStoryIds(response);
                setVisibleStoryIds(response.splice(0, storyCount));
            }
        })
    }, []);

    useEffect(() => {
        setVisibleStoryIds(storyIds.splice(0, storyCount));
    }, [storyCount]);

    return (
        <>
            <LoadMoreBtn storyCount={storyCount} setStoryCount={setStoryCount}/>
            <ul>
                {
                    visibleStoryIds.map(storyId => (
                        <Story key={storyId} storyId={storyId}/>
                    ))
                }
            </ul>
        </>
    )
}

