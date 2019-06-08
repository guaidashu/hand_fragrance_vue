import axios from "axios"
import Qs from "qs"

export const sureSend = (post) => {
    return axios.request({url: '/api/gifts/book', method: 'post', data: Qs.stringify(post)})
};

export const getRecentBooks = () => {
    return axios.request({url: '/api/gifts/getRecentBooks', method: 'post'})
};

export const getMyGifts = () => {
    return axios.request({url: '/api/gifts/my_gift', method: 'post'})
};

export const removeGift = (post) => {
    return axios.request({url: '/api/gifts/redraw', method: 'post', data: Qs.stringify(post)})
};
