import axios from "axios";
import Qs from "qs";

export const getGiftUserInfo = (post) => {
    return axios.request({url: '/api/drift/getGiftUserInfo', method: 'post', data: Qs.stringify(post)})
};

export const sendDrift = (post) => {
    return axios.request({url: '/api/drift/sendDrift', method: 'post', data: Qs.stringify(post)})
};

export const getDriftList = () => {
    return axios.request({url: '/api/drift/getDriftList', method: 'post'})
};

export const removeDrift = (post) => {
    return axios.request({url: '/api/drift/removeDrift', method: 'post', data: Qs.stringify(post)})
};
