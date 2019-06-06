`
<template>
    <div>
        <div class="log_container">
            <div class="log_form">
                <!-- 登录提示 -->
                <div class="log_remind">
                    登录
                </div>
                <!-- 用户名 -->
                <div class="log_user_container">
                    <label id="log_user_label" for="log_user">
                    </label>
                    <input type="text" v-model="form.email" name="email" id="log_user" placeholder="账号/手机号"/>
                </div>
                <!-- 密码 -->
                <div class="log_password_container">
                    <label id="log_password_label" for="log_password">
                    </label>
                    <input v-model="form.password" type="password" name="password" id="log_password"
                           placeholder="密码/三次输入错误则会有验证码"/>
                </div>
                <!-- 登录按钮 -->
                <div class="log_btn cursor_pointer" @click="login">
                    &nbsp;登录
                </div>
                <!-- 其他方式登录 -->
                <div class="log_other">
                    <p style="float:left;">
                        第三方登录：
                    </p>
                    <p style="float:left;">
                        <a href="#" class="cursor_pointer log_qq" title="qq登录"></a>
                    </p>
                    <p style="float:left;">
                        <a href="#" class="cursor_pointer log_weixin" title="微信登录"></a>
                    </p>
                    <p style="float:left;">
                        <a href="#" class="cursor_pointer log_weibo" title="新浪微博"></a>
                    </p>
                </div>
                <!-- 底部各种 -->
                <div class="log_bottom">
                    <p>
                        <router-link to="/">返回首页</router-link>
                    </p>
                    <p>
                        <a href="">忘记密码</a>
                    </p>
                    <p class="log_login">
                        <router-link to="/register">注册账号</router-link>
                    </p>
                </div>
            </div>
        </div>
        <div class="log_body">
        </div>
    </div>
</template>

<script>
    import '../../../static/css/body.css'
    import '../../../static/css/yy.css'
    import '../../../static/css/login.css'
    import {login} from '../../../api/login'

    export default {
        name: "login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                if (!this.form.email || !this.form.password) {
                    this.$Message.error("请输入用户名和密码")
                    return
                }
                login(this.form).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        console.log("登录成功")
                        this.$store.dispatch("getUserInfo")
                        if (!this.$store.state.user.fromUrl) {
                            this.$router.push({
                                path: '/'
                            })
                        }else {
                            this.$router.push({
                                path: this.$store.state.user.fromUrl,
                                query: this.$store.state.user.fromQuery
                            })
                        }

                    } else {
                        this.$Message.error(data.msg)
                    }
                })
            }
        },
        mounted: function () {

        }
    }
</script>
