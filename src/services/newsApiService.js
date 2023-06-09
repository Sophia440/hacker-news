import axios from 'axios';
import {selectFields} from "../selectors/fieldSelector";

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId) => {
    return await axios.get(`${storyUrl + storyId}.json`).then(({data}) => data && selectFields(data));
}

export const getStoryIds = async () => {
    return await axios.get(newStoriesUrl).then(({data}) => data);
}
