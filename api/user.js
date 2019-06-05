import axios from 'axios';
import Qs from 'qs';

export const getUserInfo = (post) => {
    return axios.request({url: '/api/user/getUserInfo', method: 'post', data: Qs.stringify(post)})
};
