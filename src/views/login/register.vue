<template>
    <div>
        <NavHeader></NavHeader>
        <div class="register_container">
            <Form ref="formCustom" :model="form" :rules="formRule">
                <FormItem label="昵称" prop="nickname">
                    <Input type="text" v-model="form.nickname" placeholder="请输入昵称"></Input>
                </FormItem>
                <FormItem label="电话" prop="phone_number">
                    <Input type="text" v-model="form.phone_number" placeholder="请输入电话"></Input>
                </FormItem>
                <FormItem label="邮箱" prop="email">
                    <Input type="email" v-model="form.email" placeholder="请输入邮箱"></Input>
                </FormItem>
                <FormItem label="密码" prop="password">
                    <Input type="password" v-model="form.password" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem label="确认密码" prop="rePassword">
                    <Input type="password" v-model="form.rePassword" placeholder="请输入确认密码"></Input>
                </FormItem>
            </Form>
            <div class="register_btn_container">
                <Button type="primary" size="large" @click="register">确认注册</Button>
            </div>
        </div>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavFooter from "../components/NavFooter";
    import validate from "../../libs/validate";
    import {register} from "../../../api/login"
    import {printError} from "../../util/printError";

    export default {
        name: "register",
        components: {NavFooter, NavHeader},
        data() {
            const validateUserName = (rule, value, callback) => {
                if (value.trim() === '') {
                    callback(new Error('用户名不能为空'));
                } else {
                    callback()
                }
            };
            const validatePassword = (rule, value, callback) => {
                if (value.trim() === '') {
                    callback(new Error('密码不能为空'));
                } else {
                    if (this.rePassword !== '') {
                        this.$refs.formCustom.validateField("rePassword")
                    }
                    callback()
                }
            };
            const validateRePassword = (rule, value, callback) => {
                if (!value.trim()) {
                    callback(new Error('密码不能为空'));
                } else {
                    if (value !== this.form.password) {
                        callback(new Error('两次密码不一致，请重新输入'));
                    }
                    callback()
                }
            };
            const validatePhone = (rule, value, callback) => {
                if (!value.trim()) {
                    callback(new Error('手机号不能为空'));
                } else {
                    if (!validate.phoneValidate(value)) {
                        callback(new Error("请输入一个正确的手机号"))
                    } else {
                        callback()
                    }
                }
            };
            const validateEmail = (rule, value, callback) => {
                if (!value.trim()) {
                    callback(new Error("请输入邮箱"))
                } else {
                    if (!validate.emailValidate(value)) {
                        callback(new Error("请输入一个正确的邮箱"))
                    } else {
                        callback()
                    }
                }
            };
            return {
                form: {
                    nickname: '',
                    password: '',
                    phone_number: '',
                    rePassword: '',
                    email: ''
                },
                formRule: {
                    password: [
                        {required: true, validator: validatePassword, trigger: 'blur'}
                    ],
                    nickname: [
                        {required: true, validator: validateUserName, trigger: 'blur'}
                    ],
                    rePassword: [
                        {required: true, validator: validateRePassword, trigger: 'blur'}
                    ],
                    phone_number: [
                        {required: true, validator: validatePhone, trigger: 'blur'}
                    ],
                    email: [
                        {required: true, validator: validateEmail, trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            register() {
                register(this.form).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.$Message.success("注册成功")
                        this.$router.push({
                            path: '/login'
                        })
                        // this.form = {
                        //     nickName: '',
                        //     password: '',
                        //     phone: '',
                        //     rePassword: '',
                        //     email: ''
                        // }
                        console.log(data.result)
                    } else {
                        printError(this, data)
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .register_container {
        width: 500px;
        padding: 0 15px;
        margin: 30px auto 0;
    }

    .register_btn_container {
        width: 88px;
        margin: 50px auto 0;
    }

    @media (max-width: 500px) {
        .register_container {
            width: 100%;
        }
    }
</style>
