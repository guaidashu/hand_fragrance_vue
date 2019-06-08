<template>
    <div>
        <nav-header :linking="'gifts'"></nav-header>
        <div class='container'>
            <div class="row">
            </div>
            <div class="row flex-vertical-center">
                <div style="margin-top:20px;" class="col-md-6">
                    <span class="sub-title">我想赠送的书籍  共  {{total}} 本</span>
                    <hr>
                </div>
            </div>
            <div v-for="(item, index) in gifts" :key="index" class="row my-gifts-row">
                <a :href="'/detail?isbn=' + item.book.isbn" class="">
                    <div style="margin-bottom:30px; display: flex; justify-content: space-between"
                         class="col-md-9 col-padding content-box">
                        <div style="display: flex; justify-content: flex-start; flex-grow: 1">
                            <a>
                                <div class="col-md-2 img-box">
                                    <img class="book-img-small shadow"
                                         :src="item.book.image">
                                </div>
                            </a>
                            <div style="margin-top:6px;" class="col-md-6 flex-vertical">
                            <span id="title"
                                  class="book-middle-title">{{item.book.title}}</span>
                                <div style="margin-top:6px;"
                                     class="flex-vertical description-font">
                                    <span id="author">{{item.book.author | getAuthor}}</span>
                                    <span id="publisher">{{item.book.publisher}}</span>
                                    <span id="price">{{item.book.price | currency("￥")}}</span>
                                    <span id="isbn">{{item.book.isbn}}</span>
                                </div>
                                <a class="link-normal"
                                   href="javascript:;" @click="removeGift(item.id)">
                                    撤销
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 flex-vertical" style="padding: 0">
                            <a :href="'/detail?isbn=' + item.book.isbn">
                                <span class="bg-info">{{item.wishes_count}}人想要</span>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
            <Spin size="large" fix v-if="searchLoading"></Spin>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavFooter from "../components/NavFooter";
    import NavHeader from "../components/NavHeader";
    import {getMyGifts, removeGift} from "../../../api/gift";

    export default {
        name: "gifts",
        components: {NavHeader, NavFooter},
        data() {
            return {
                gifts: [],
                total: 0,
                searchLoading: false
            }
        },
        methods: {
            init() {
                this.getMyGifts()
            },
            getMyGifts() {
                this.searchLoading = true
                getMyGifts().then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.gifts = data.result
                        this.total = this.gifts.length
                        this.searchLoading = false
                    } else {
                        console.log(data.msg)
                    }
                })
            },
            removeGift(id) {
                removeGift({id: id}).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.$Message.success("移除成功")
                        this.init()
                    } else {
                        this.$Message.error(data.msg)
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
</style>
