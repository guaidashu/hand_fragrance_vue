import Vue from 'vue'
import Router from 'vue-router'

// 引入路由
Vue.use(Router)

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
    ]
})

// 设置页面标题读取
router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title;
    next()
})

export default router
