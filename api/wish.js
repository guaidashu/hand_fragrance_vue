import axios from "axios"
import Qs from "qs"

export const addWish = (post) => {
    return axios.request({url: '/api/wish/book', method: 'post', data: Qs.stringify(post)})
};

export const getMyWishes = () => {
    return axios.request({url: '/api/wish/getMyWishes', method: 'post'})
};

export const removeWish = (post) => {
    return axios.request({url: '/api/wish/redraw', method: 'post', data: Qs.stringify(post)})
};
