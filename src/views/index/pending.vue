<template>
    <div>
        <nav-header :linking="'pending'"></nav-header>
        <div class='container'>
            <div class="row"></div>
            <div class="row module-title">
                <div style="margin-top:30px;" class="col-md-2">
                    <span class='sub-title'>交易记录</span>
                </div>
            </div>
            <div style="margin-top:20px;" v-for="(drift, index) in drifts" :key="index" class="row drift-container">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-2">
                            <img class="book-img-small shadow" :src="drift.book_img">
                        </div>
                        <div style="margin-left:-30px;"
                             class="col-md-8 flex-vertical description">
                            <div><span>书籍名：</span><span> {{drift.book_title}} </span></div>
                            <div><span>作者：</span><span> {{drift.book_author}} </span></div>
                            <div><span>发起日期：</span><span> {{drift.date}} </span></div>
                            <div>
                                <span v-if="drift.you_are == 'requester'">向他请求：</span>
                                <span v-else>请求者：</span>
                                <span> {{drift.operator}} </span>
                            </div>
                            <div>
                                <span>状态：</span>
                                <span class="status-color"> {{drift.status_str}} </span>
                            </div>
                            <div>
                                <span>接收人：</span>
                                <span>{{drift.recipient_name}}</span>
                            </div>
                            <div>
                                <span>邮寄地址：</span>
                                <span> {{drift.address}} </span>
                            </div>
                            <div><span>联系电话：</span><span> {{drift.mobile}} </span></div>
                        </div>
                        <div class="col-md-2 flex-vertical">
                            <a href="javascript:;" v-if="drift.you_are == 'gifter' && drift.status.status == 1">
                                <span class="btn-normal">已邮寄</span>
                            </a>
                            <a style="margin-top:20px;" href="javascript:;"
                               v-if="drift.you_are == 'gifter' && drift.status.status == 1">
                                <span class="btn-shadow">拒&nbsp;&nbsp;&nbsp;绝</span>
                            </a>

                            <a style="margin-top:20px;" href="javascript:;"
                               v-if="drift.you_are == 'gifter' && drift.status.status == 2">
                                <span class="btn-shadow">邮寄中</span>
                            </a>

                            <a href="javascript:;" v-if="drift.you_are == 'requester' && drift.status.status == 1">
                                <span class="btn-normal" @click="removeDrift(drift)">撤 销</span>
                            </a>
                        </div>
                    </div>
                    <div style="margin-top:20px;" class="row message-container">
                        <div class="col-md-12">
                            <p>
                                <span class="message-flag" v-if="drift.you_are == 'receiver'"> 他的留言： </span>
                                <span class="message-flag" v-else> 你的留言： </span>
                                <span> {{drift.message}} </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Spin size="large" fix v-if="searchLoading"></Spin>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavFooter from "../components/NavFooter";
    import {printError} from "../../util/printError";
    import {getDriftList, removeDrift} from "../../../api/drift";

    export default {
        name: "pending",
        components: {NavFooter, NavHeader},
        data() {
            return {
                drifts: [],
                searchLoading: false
            }
        },
        methods: {
            init() {
                this.getDriftList()
            },
            getDriftList() {
                this.searchLoading = true
                getDriftList().then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.drifts = data.result
                    } else {
                        printError(this, data)
                    }
                    this.searchLoading = false
                })
            },
            removeDrift(drift) {
                removeDrift({drift_id: drift.drift_id}).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.$Message.success("撤销成功")
                        this.init()
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

    .drift-container {
        border: 1px solid #e0e0e0;
        padding: 20px 0 0 0;
        color: #333;
    }

    .message-container {
        padding: 10px 0 0 0;
        background-color: #e8ebef;
    }

    .message-flag {
        color: #8BACA1;
    }

    .description {
        margin-left: -30px;
    }

    .description div {
        margin-bottom: 5px;
    }

    .description div > span:first-child {
        color: #8e8E8E;
    }

    .status-color {
        color: #FB7C85;
    }
</style>
