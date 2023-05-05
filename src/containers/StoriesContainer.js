import React, {useEffect, useState} from "react";
import {getStoryIds} from "../services/newsApiService";
import {Story} from "../components/Story";
import LoadMoreBtn from "../components/LoadMoreBtn";
import {Box, Grid} from "@mui/material";

export function StoriesContainer() {
    const [storyIds, setStoryIds] = useState([]);
    const [visibleStoryIds, setVisibleStoryIds] = useState([]);
    const [storyCount, setStoryCount] = useState(100);

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
            <Box sx={{width: '100%'}}>
                <Grid container pacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        visibleStoryIds.map(storyId => (
                            <Story key={storyId} storyId={storyId}/>
                        ))
                    }
                </Grid>
            </Box>
        </>
    )
}

