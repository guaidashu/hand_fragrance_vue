<template>
    <div>
        <nav-header></nav-header>
        <div class='container'>
            <div class="row"></div>
            <div style="margin-top:20px;" class="row flex-vertical-center">
                <div class="col-md-6">
            <span class="sub-title">搜索 <span class="space highlight"
                                             id="keyword">{{ books.keyword }}</span>的结果</span>
                </div>
                <div class="col-md-3 col-md-offset-3">
            <span class="sub-title"> 共 <span class="space"
                                             id="total">{{ books.total }}</span> 条记录</span>
                </div>
            </div>
            <hr>
            <div class="row col-padding" v-for="(book, index) in books.books" :key="index">
                <a href="javascript:;" class="" @click="goDetail(book)">
                    <div class="col-md-2">
                        <img class="book-img-small shadow" :src="book.image">
                    </div>
                    <div class="col-md-7 flex-vertical description-font">
                        <span class="title">{{ book.title }}</span>
                        <span>{{ book.author.join(', ') + ' / ' }}{{book.publisher + ' / '}}{{book.price | currency('￥') }}</span>
                        <span class="summary">{{ book.summary }}</span>
                    </div>
                </a>
            </div>
            <div style="width: 100%; height: 30px;"></div>
            <Page :total="books.total" :current="page" @on-change="p => {this.page = p}" :page-size="pageSize"></Page>
            <Spin size="large" fix v-if="searchLoading"></Spin>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import {searchBooks} from "../../../api/books";
    import NavFooter from "../components/NavFooter";
    import {printError} from "../../util/printError";

    export default {
        name: "search",
        components: {NavFooter, NavHeader},
        data() {
            return {
                books: [],
                page: 1,
                pageSize: 15,
                searchLoading: false
            }
        },
        methods: {
            init() {
                this.searchBooks()
            },
            searchBooks() {
                let q = this.$route.query.q
                if (!q) {
                    return
                }
                this.searchLoading = true
                searchBooks({q: q, page: this.page}).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.books = data.result
                    } else {
                        printError(this, data.msg)
                    }
                    this.searchLoading = false
                })
            },
            goDetail(book) {
                this.$router.push({
                    path: '/detail',
                    query: {
                        isbn: book.isbn
                    }
                })
            }
        },
        watch: {
            'page': 'init'
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
    .col-padding {
        padding-top: 50px;
    }

    .summary {
        margin-top: 12px;
        height: 70px;
        padding-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    #pagination {
        margin-top: 80px;
    }

    #pagination li {
        background-color: transparent;
    }

    #pagination a {
        color: #826762;
    }

    #pagination li.active > a {
        color: #FFFFFF;
    }

    #pagination li > a:hover {
        color: #826762;
    }

    #pagination > .active > a {
        background-color: #826762;
        border-color: #826762;
        color: #ffffff;
    }
</style>
