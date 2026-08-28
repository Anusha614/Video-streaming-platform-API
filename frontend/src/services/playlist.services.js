import API from "./api"

export const createPlaylist = await (playlistData) => {
    const response = API.post('/playlists', playlistData)
    return response
}

export const updatePlaylist = await (playlistId, updatedPlaylistData) => {
    const response = API.patch('/playlists/${playlistId}', updatedPlaylistData)
    return response.data
}

export const getPlaylistById = await (playlistId) => {
    const response = API.get('/${playlistId}')
    return response.data
}

export const getUserPlaylists = async (userId) => {
    const response = await API.get(`/playlists/user/${userId}`);
    return response.data;
};

export const deletePlaylist = async (playlistId) => {
    const response = await API.delete(`/playlists/${playlistId}`);
    return response.data;
};

export const addVideoToPlaylist = async (playlistId, videoId) => {
    const response = await API.patch(`/playlists/${playlistId}/${videoId}`);
    return response.data;
};

export const removeVideoFromPlaylist = async (playlistId, videoId) => {
    const response = await API.delete(`/playlists/${playlistId}/${videoId}`);
    return response.data;
};