import axios from 'axios';
import Qs from 'qs';

export const login = (post) => {
    return axios.request({url: '/api/user/login', method: 'post', data: Qs.stringify(post)})
};

export const register = (post) => {
    return axios.request({url: '/api/user/register', method: 'post', data: Qs.stringify(post)})
};

export const logout = () => {
    return axios.request({url: '/api/user/logout', method: 'post'})
};
