import Vue from 'vue'
import Router from 'vue-router'
import check from '../libs/check'
import routes from './router'
import store from '../../store'
import {getUserInfo} from "../../api/user";

// 引入路由
Vue.use(Router);

const router = new Router({
    mode: "history",
    routes
});

// 设置页面标题读取
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    //
    // 路由拦截(登录拦截)
    //
    let url = to.fullPath.trim()
    // 如果已经登录， 则不允许进入登录页面
    if (store.state.user.userId) {
        if (url == '/login') {
            next({path: '/'})
        }else {
            next()
        }
    } else {
        //    如果是session存在，则为了安全起见，请求一次用户信息
        if (store.state.user.session) {
            // 获取用户信息
            getUserInfo().then(res=>{
                let data = res.data
                if (data.code === 0){
                    if (data.result.id) {
                        store.commit("setUserId", data.result.id)
                        store.commit("setUserInfo", data.result)
                        if (url == '/login') {
                            next({path: '/'})
                        }else {
                            next()
                        }
                    }else {
                        // 如果未登录，则进入其他需要登录的页面时 会自动跳转到登录页
                        let checkUrlResult = check.checkUrl(url)
                        if (!checkUrlResult) {
                            // 前置url获取， 存储到vuex， 用于进行登录后自动跳转回本来要访问的页面
                            store.commit("setFromUrl", url)
                            store.commit("setFromQuery", to.query)
                            next({path: '/login'})
                        }else {
                            next()
                        }
                    }
                }
            })
        }else {
            // 如果未登录，则进入其他需要登录的页面时 会自动跳转到登录页
            let checkUrlResult = check.checkUrl(url)
            if (!checkUrlResult) {
                // 前置url获取， 存储到vuex， 用于进行登录后自动跳转回本来要访问的页面
                store.commit("setFromUrl", url)
                store.commit("setFromQuery", to.query)
                next({path: '/login'})
            }else {
                next()
            }
        }
    }
});

export default router
