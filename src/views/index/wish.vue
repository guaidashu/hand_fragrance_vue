<template>
    <div>
        <NavHeader :linking="'wish'"></NavHeader>
        <div class="container">
            <div class="row">


            </div>


            <div class="row flex-vertical-center">
                <div style="margin-top:20px;" class="col-md-6">
                    <span class="sub-title">我想要的书籍  共  {{total}} 本</span>
                    <hr>
                </div>
            </div>

            <div class="row my-gifts-row" v-for="(item, index) in wishes" :key="index">
                <a :href="'/detail?isbn=' + item.book.isbn" class="">
                </a>
                <div style="margin-bottom:30px; display: flex" class="col-md-9 col-padding content-box"><a
                        :href="'/detail?isbn=' + item.book.isbn" class="">
                </a>
                    <div style="display: flex; justify-content: flex-start; flex-grow: 1"><a
                            :href="'/detail?isbn=' + item.book.isbn" class="">
                        <div class="col-md-2 img-box">
                            <img class="book-img-small shadow" :src="item.book.image">
                        </div>
                    </a>
                        <div style="margin-top:6px;" class="col-md-6 flex-vertical"><a
                                :href="'/detail?isbn=' + item.book.isbn" class="">
                            <span id="title" class="book-middle-title">{{item.book.title}}</span>
                            <div style="margin-top:6px;" class="flex-vertical description-font">
                                <span id="author">{{item.book.author | getAuthor}}</span>
                                <span id="publisher">{{item.book.publisher}}</span>
                                <span id="price">{{item.book.price | currency("￥")}}元</span>
                                <span id="isbn">{{item.book.isbn}}</span>
                            </div>
                        </a><a class="link-normal" href="javascript:;" @click="removeWish(item.id)">
                            撤销
                        </a>
                        </div>
                    </div>
                    <div class="col-md-3 flex-vertical" style="padding: 0">

                        <a href="http://www.yushu.im/book/9787535436702/detail">
                            <span class="bg-info">{{item.wishes_count}}人赠送</span>
                        </a>

                    </div>
                </div>

            </div>
            <Spin size="large" fix v-if="searchLoading"></Spin>
        </div>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavFooter from "../components/NavFooter";
    import {getMyWishes, removeWish} from "../../../api/wish";

    export default {
        name: "wish",
        data() {
            return {
                wishes: [],
                total: 0,
                searchLoading: false
            }
        },
        components: {NavFooter, NavHeader},
        methods: {
            init() {
                this.getMyWishes()
            },
            getMyWishes() {
                this.searchLoading = true
                getMyWishes().then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.wishes = data.result
                        this.total = this.wishes.length
                        this.searchLoading = false
                    } else {
                        this.$Message.error(data.msg)
                    }
                })
            },
            removeWish(id) {
                removeWish({id: id}).then(res => {
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
