export default [
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
