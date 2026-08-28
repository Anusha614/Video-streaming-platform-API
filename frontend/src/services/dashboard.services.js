import API from './api';

export const getChannelStats = async (channelId) => {
    const response = await API.get(`/dashboard/stats/${channelId}`);
    return response.data;
};

export const getChannelVideos = async (channelId, videoId) => {
    const response = await API.get(`/dashboard/videos/${channelId}/${videoId}`);
    return response.data;
};