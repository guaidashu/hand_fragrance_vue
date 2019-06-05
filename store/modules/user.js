import {getToken} from "../../src/libs/util";
import {getUserInfo} from "../../api/user";

export default {
    state: {
        userId: '',
        fromUrl: '',
        // 存储到
        session: getToken()
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
        },
        setFromUrl(state, fromUrl) {
            console.log(fromUrl)
            state.fromUrl = fromUrl
        }
    },
    getters: {},
    actions: {
        getUserInfo(context) {
            getUserInfo().then(res => {
                let data = res.data
                if (data.code === 0) {
                    context.commit("setUserId", data.result.id)
                }
            })
        }
    }
}
