import API from './api';

export const getVideoComments = async (videoId, params) => {
    const response = await API.get(`/comments/${videoId}`, { params });
    return response.data;
};

export const addComment = async (videoId, commentData) => {
    const response = await API.post(`/comments/${videoId}`, commentData);
    return response.data;
};

export const deleteComment = async (commentId) => {
    const response = await API.delete(`/comments/c/${commentId}`);
    return response.data;
};

export const updateComment = async (commentId, commentData) => {
    const response = await API.patch(`/comments/c/${commentId}`, commentData);
    return response.data;
};