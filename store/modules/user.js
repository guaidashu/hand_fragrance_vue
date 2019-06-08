import {getToken} from "../../src/libs/util";
import {getUserInfo} from "../../api/user";

export default {
    state: {
        userId: '',
        fromUrl: '',
        fromQuery: {},
        userInfo: '',
        // 存储到
        session: getToken()
    },
    mutations: {
        setUserId(state, userId) {
            state.userId = userId
        },
        setFromUrl(state, fromUrl) {
            state.fromUrl = fromUrl
        },
        setFromQuery(state, query) {
            state.fromQuery = query
        },
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo
        }
    },
    getters: {},
    actions: {
        getUserInfo(context) {
            getUserInfo().then(res => {
                let data = res.data
                if (data.code === 0) {
                    context.commit("setUserInfo", data.result)
                    context.commit("setUserId", data.result.id)
                }
            })
        }
    }
}
