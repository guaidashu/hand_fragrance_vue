import axios from "axios"
import Qs from "qs"

export const addWish = (post) => {
    return axios.request({url: '/api/wish/book', method: 'post', data: Qs.stringify(post)})
}
