import axios from "axios"
import Qs from "qs"

export const sureSend = (post) => {
    return axios.request({url: '/api/gifts/book', method: 'post', data: Qs.stringify(post)})
};
