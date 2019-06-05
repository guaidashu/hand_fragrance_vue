import Vue from 'vue'
import Router from 'vue-router'
import check from '../libs/check'
import store from '../../store'

// 引入路由
Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import("../views/index/index"),
            meta: {
                title: "主页"
            },
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("../views/login/login"),
            meta: {
                title: "登录"
            },
        },
        {
            path: '/register',
            name: 'register',
            component: () => import("../views/login/register"),
            meta: {
                title: '注册账户',
            }
        },
        {
            path: '/wish',
            name: 'wish',
            component: () => import("../views/index/wish"),
            meta: {
                title: '心愿清单'
            }
        },
        {
            path: '/gifts',
            name: 'gifts',
            component: () => import("../views/index/gifts"),
            meta: {
                title: '赠送清单'
            }
        },
        {
            path: '/pending',
            name: 'pending',
            component: () => import("../views/index/pending"),
            meta: {
                title: '交易记录'
            }
        },
        {
            path: '/drift',
            name: 'drift',
            component: () => import("../views/index/drift"),
            meta: {
                title: '书籍求取'
            }
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import("../views/index/detail"),
            meta: {
                title: '书籍详情页'
            }
        },
        {
            path: '/search',
            name: 'search',
            component: () => import("../views/index/search"),
            meta: {
                title: '搜索结果'
            }
        }
    ]
});

// 设置页面标题读取
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    // 路由拦截(登录拦截)
    let url = to.fullPath.trim()
    // 如果已经登录， 则不允许进入登录页面
    if (check.checkLogin()) {
        if (url == '/login') {
            next({path: '/'})
        }
    } else {
        // 如果未登录，则进入其他需要登录的页面时 会自动跳转到登录页
        let checkUrlResult = check.checkUrl(url)
        if (!checkUrlResult) {
            // 前置url获取， 存储到vuex， 用于进行登录后自动跳转回本来要访问的页面
            store.commit("setFromUrl", url)
            next({path: '/login'})
        }
    }
    next()
});

export default router
