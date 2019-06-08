<template>
    <div>
        <nav-header :linking="'drift'"></nav-header>
        <div class='container'>
            <div class="row">
            </div>
            <div style="margin-top:15px;" class="row">
                <div class="col-md-8 col-md-offset-2">
                    <div class="row">
                    </div>
                    <div class="bg-container">
                        <div class="row">
                            <div class="col-md-12 text-center bg-head">
                        <span class="drift-title">向<span
                                class="space">{{giftUser.nickname}}</span>请求这本书</span>
                            </div>
                        </div>
                        <div style="margin-top:15px;" class="row">
                            <div class="col-md-10 col-md-offset-1 flex-vertical gifter-container">
                                <span class="sub-title-color">以下是书籍拥有者信息，诚信度供你参考:</span>
                                <span style="margin-top:10px; margin-bottom:10px;">{{giftUser.nickname}}</span>
                                <div><span
                                        class="description-font">书豆：</span><span>{{giftUser.beans}}</span>
                                </div>
                                <div><span
                                        class="description-font">接受/送出书籍：</span><span>{{giftUser.receive_counter}}/{{giftUser.send_counter}}</span>
                                </div>
                            </div>
                        </div>
                        <div style="margin-top:10px;" class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <span class="main-color">本次交易将消耗你1个书豆，你当前还有{{currentUser.beans}}个书豆</span>
                            </div>
                        </div>
                        <form action="" method="post" onsubmit="return false">
                            <div style="margin-top:20px;" class="row">
                                <div class="col-md-10 col-md-offset-1 flex-vertical input-margin">
                                    <label class="sub-title-color" for="recipient_name">收件人姓名</label>
                                    <div class="row">
                                        <div class="col-md-5">
                                            <input placeholder="请填写收件人姓名" id="recipient_name"
                                                   name="recipient_name"
                                                   class="normal-input btn-block form-control"
                                                   value="" v-model="form.recipient_name">
                                        </div>
                                    </div>
                                    <label class="sub-title-color" for="mobile">联系电话</label>
                                    <div class="row">
                                        <div class="col-md-5">
                                            <input placeholder="如13818181818" id="mobile"
                                                   name="mobile"
                                                   class="normal-input btn-block form-control"
                                                   v-model="form.mobile">
                                        </div>
                                    </div>
                                    <label class="sub-title-color" for="address">书籍收件地址</label>
                                    <textarea class="form-control" rows="3" id="address" name="address"
                                              v-model="form.address"
                                              placeholder="如，张三 北京市清华大学666室。请务必确保该地址能够收到书籍"></textarea>
                                    <label class="sub-title-color" for="message">对他 / 她
                                        说的话</label>
                                    <textarea class="form-control" id="message" name="message" v-model="form.message"
                                              rows="4"
                                              placeholder="如有一些特别的要求，可以在这里填写"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <div style="position: relative;left:-20px;"
                                     class="col-md-5 col-md-offset-4 flex-vertical text-center">
                                    <input style="margin-top:12px;" type="button"
                                           class="btn btn-big btn-block" value="提交" @click="sendDrift">
                                    <span style="margin-top:15px;"
                                          class="main-color">提交信息，等待{{giftUser.nickname}}将书籍邮寄给你</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavFooter from "../components/NavFooter";
    import {getGiftUserInfo, sendDrift} from "../../../api/drift";
    import {printError} from "../../util/printError";

    export default {
        name: "drift",
        components: {NavFooter, NavHeader},
        data() {
            return {
                gift: {},
                giftUser: {},
                currentUser: {},
                form: {
                    gift_id: null,
                    mobile: '',
                    recipient_name: '',
                    address: '',
                    message: ''
                }
            }
        },
        methods: {
            init() {
                this.getGiftUserInfo()
            },
            getGiftUserInfo() {
                getGiftUserInfo({id: this.$route.query.id}).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.gift = data.result
                        this.currentUser = data.result.current_user
                        this.giftUser = this.gift.user
                    } else {
                        printError(this, data)
                    }
                })
            },
            sendDrift() {
                this.form.gift_id = this.gift.id
                sendDrift(this.form).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.$Message.success("发送成功")
                        this.$router.push({
                            path: '/pending'
                        })
                    } else {
                        printError(this, data)
                    }
                })
            }
        },
        mounted() {
            this.init()
        }
    }
</script>

<style scoped>
    @import "../../../static/css/bootstrap.min.css";
    @import '../../../static/css/index.css';
    @import '../../../static/css/base.css';

    .drift-title {
        font-size: 29px;
        color: #ffffff;
        line-height: 70px;
    }

    .gifter-container {
        padding: 15px;
        background-color: #f2f5f7;
    }
</style>
