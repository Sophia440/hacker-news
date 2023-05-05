import React from "react";
import {Route, Routes} from "react-router-dom";
import {ROUTES} from "./constants/routes";
import {StoriesContainer} from "./containers/StoriesContainer";
import {Container} from "@mui/material";
import {StoryPage} from "./components/StoryPage";

function App() {
    return (
        <>
            <Container>
                <Routes>
                    <Route path={ROUTES.root}>
                        <Route index element={<StoriesContainer/>}/>
                        <Route path=":storyId" element={<StoryPage/>}/>
                    </Route>
                </Routes>
            </Container>
        </>
    );
}

export default App;
