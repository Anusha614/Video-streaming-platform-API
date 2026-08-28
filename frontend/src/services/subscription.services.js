import API from './api';

export const getSubscribedChannels = async (subscriberId) => {
    const response = await API.get(`/subscriptions/u/${subscriberId}`);
    return response.data;
};

export const getUserChannelSubscribers = async (channelId) => {
    const response = await API.get(`/subscriptions/c/${channelId}`);
    return response.data;
};

export const toggleSubscription = async (channelId) => {
    const response = await API.patch(`/subscriptions/c/${channelId}`);
    return response.data;
};