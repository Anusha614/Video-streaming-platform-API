import API from "./api"

export const toggleCommentLikes = await (commentId) => {
    const response = await API.post('/likes/toggle/c/${commentId}')
    return response.data
}

export const toggleVideoLikes = await (videoId) => {
    const response = await API.post('/likes/toggle/v/${videoId}')
    return response.data
}

export const toggleTweetLikes = await (tweetId) => {
    const response = await API.post('/likes/toggle/c/${tweetId}')
    return response.data
}

export const getLikedVideos = await () => {
    const response = await API.get('/likes/liked-videos')
    return response.data
}