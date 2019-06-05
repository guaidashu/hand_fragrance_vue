<template>
    <div>
        <nav-header :linking="'gifts'"></nav-header>
        <div class='container'>
            <div class="row">
            </div>
            <div class="row flex-vertical-center">
                <div style="margin-top:20px;" class="col-md-6">
                    <span class="sub-title">我想赠送的书籍  共  1 本</span>
                    <hr>
                </div>
            </div>
            <div class="row my-gifts-row">
                <a href="/book/9787544707923/detail" class="">
                    <div style="margin-bottom:30px; display: flex; justify-content: space-between"
                         class="col-md-9 col-padding content-box">
                        <div style="display: flex; justify-content: flex-start; flex-grow: 1">
                            <a>
                                <div class="col-md-2 img-box">
                                    <img class="book-img-small shadow" src="https://img3.doubanio.com/lpic/s3628415.jpg">
                                </div>
                            </a>
                            <div style="margin-top:6px;" class="col-md-6 flex-vertical">
                            <span id="title"
                                  class="book-middle-title">朗读者</span>
                                <div style="margin-top:6px;"
                                     class="flex-vertical description-font">
                                    <span id="author">[德]本哈德·施林克</span>
                                    <span id="publisher">译林出版社</span>
                                    <span id="price">￥22.00</span>
                                    <span id="isbn">9787544707923</span>
                                </div>
                                <a class="link-normal"
                                   href="/gifts/734/redraw">
                                    撤销
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 flex-vertical" style="padding: 0">
                            <a href="/book/9787544707923/detail">
                                <span class="bg-info">4人想要</span>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavFooter from "../components/NavFooter";
    import NavHeader from "../components/NavHeader";

    export default {
        name: "gifts",
        components: {NavHeader, NavFooter}
    }
</script>

<style scoped>
    @import "../../../static/css/bootstrap.min.css";
    @import '../../../static/css/index.css';
    @import '../../../static/css/base.css';
</style>
