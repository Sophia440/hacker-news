import React from "react";
import storyCounter from "../store/storyCounter";
import {Button} from "@mui/material";
import {observer} from "mobx-react-lite";

const LoadMoreBtn = observer(({storyCount, setStoryCount}) => {
    return <Button variant="contained" onClick={() => storyCounter.increase(storyCount, setStoryCount)}>
        Load more
    </Button>;
});

export default LoadMoreBtn;
