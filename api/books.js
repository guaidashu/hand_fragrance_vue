import axios from 'axios'
import Qs from 'qs'

export const searchBooks = (post) => {
    return axios.request({url: '/api/book/search', method: 'post', data: Qs.stringify(post)})
};
