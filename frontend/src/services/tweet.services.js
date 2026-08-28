import API from './api';

export const createTweet = async (tweetData) => {
    const response = await API.post('/tweets', tweetData);
    return response.data;
};

export const getUserTweets = async (userId) => {
    const response = await API.get(`/tweets/${userId}`);
    return response.data;
};

export const updateTweet = async (tweetId, tweetData) => {
    const response = await API.patch(`/tweets/${tweetId}`, tweetData);
    return response.data;
};

export const deleteTweet = async (tweetId) => {
    const response = await API.delete(`/tweets/${tweetId}`);
    return response.data;
};