import API from "./api";

export const loginUser = async(credentials) => {
    const response = await API.post('/users/login', credentials)
    return response.data
}

export const registerUser = async(userData) => {
    const response = await API.post('/users/register', userData)
    return response.data
}

export const logoutUser = async () => {
    const response = await API.post('/users/logout');
    return response.data;
};

export const refreshAccessToken = async () => {
    const response = await API.post('/users/refresh-token');
    return response.data;
};

export const changeCurrentPassword = async (passwords) => {
    const response = await API.post('/users/change-password', passwords);
    return response.data;
};

export const getCurrentUser = async () => {
    const response = await API.get('/users/current-user');
    return response.data;
};

export const updateAccountDetails = async (accountData) => {
    const response = await API.patch('/users/update-account', accountData);
    return response.data;
};

export const avatarUserUpdate = async (avatarData) => {
    const response = await API.patch('/users/avatar', avatarData);
    return response.data;
};

export const coverImageUserUpdate = async (coverImageData) => {
    const response = await API.patch('/users/cover-image', coverImageData);
    return response.data;
};

export const getUserChannelProfile = async (username) => {
    const response = await API.get(`/users/c/${username}`);
    return response.data;
};

export const getWatchHistory = async () => {
    const response = await API.get('/users/history');
    return response.data;
};