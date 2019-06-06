let checkTools = {
    checkUrl(req, urls) {
        for (let i in urls) {
            if (req === '/') {
                return true
            }
            try {
                if (req.originalUrl.indexOf(urls[i]) > -1) {
                    return true
                }
            } catch (e) {
                if (req.indexOf(urls[i]) > -1) {
                    return true
                }
            }
        }
        return false
    }
};

let check = {
    checkLogin(store) {
        return store.state.user.userId
    },
    // 登录拦截检查前端的页面是否放行
    checkUrl(url, urls) {
        if (!urls) {
            urls = require('../router/allowUrls')
            urls = urls.url
        }
        return checkTools.checkUrl(url, urls);
    }
};

module.exports = check;
