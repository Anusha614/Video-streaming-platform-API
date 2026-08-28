import API from "./api";

export const getAllVideos = async (params) => {
    const response = await API.get('/video', {params})
    return response.data
}

export const publishVideo = async (videoData) => {
    const response = await API.post('/videos', videoData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    return response.data
}

export const getVideoById = async (videoId) => {
    const response = await API.get('/videos/${videoId}')
    return response.data
}

export const updateVideo = async (videoId, updatedData) => {
    const response = await API.patch('/videos/${videoId}', updatedData)
    return response.data
}

export const deleteVideo = async (videoId) => {
    const response = await API.delete('/videos/${videoId}')
    return response.data
}

export const togglePublishStatus = async (videoId) => {
    const response = await API.patch('/videos/toggle/publish/${videoId}')
    return response.data
}