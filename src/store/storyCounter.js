import {makeAutoObservable} from "mobx";

class StoryCounter {

    constructor() {
        makeAutoObservable(this)
    }

    increase(storyCount, setStoryCount) {
        if (storyCount + 20 < 500) {
            setStoryCount(storyCount + 20);
        } else {
            setStoryCount(500);
        }
    }
}

export default new StoryCounter()
