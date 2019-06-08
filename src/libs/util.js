import Cookies from 'js-cookie'

export const TOKEN_KEY = 'remember_token'

// 获取存储到cookie的 用户信息 session
export const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) {
        return token
    } else {
        return false
    }
}
