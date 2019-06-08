import axios from "axios";
import Qs from "qs";

export const getGiftUserInfo = (post) => {
    return axios.request({url: '/api/drift/getGiftUserInfo', method: 'post', data: Qs.stringify(post)})
};
