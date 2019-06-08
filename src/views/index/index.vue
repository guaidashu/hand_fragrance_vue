<template>
    <div>
        <NavHeader :linking="'index'"></NavHeader>
        <div class="container">
            <div class="row">


            </div>
            <div class="row">
                <div class="col-md-12">
                </div>
            </div>
            <div id="books" class="row">

                <div v-for="(item, index) in books" :key="index" class="col-sm-4 book-container">
                    <a :href="'/detail?isbn=' + item.isbn" class="link">
                        <div class="col-md-4 no-padding">
                            <img class="book-img cssshadow" :src="item.image">
                        </div>
                        <div style="margin-left: 0;" class="col-md-8 flex-vertical book-info">
                            <span class="title">{{item.title}}</span>
                            <div class="description-font"><span>作者：</span><span>{{item.author | getAuthor}}</span>
                            </div>
                            <span class="summary description-font">{{item.summary}}</span>
                        </div>
                    </a>
                </div>
                <Spin size="large" fix v-if="searchLoading"></Spin>
            </div>
            <div style="width: 100%; height: 30px;"></div>
<!--            <Page :total="15"></Page>-->
        </div>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavFooter from "../components/NavFooter";
    import {getRecentBooks} from "../../../api/gift";


    export default {
        name: "index",
        components: {NavFooter, NavHeader},
        data() {
            return {
                books: [],
                searchLoading: false
            }
        },
        methods: {
            init() {
                this.getRecentBooks()
            },
            getRecentBooks() {
                this.searchLoading = true
                getRecentBooks().then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.books = data.result
                        this.searchLoading = false
                    } else {
                        console.log(data.msg)
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
