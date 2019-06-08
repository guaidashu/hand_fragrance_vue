<template>
    <div>
        <nav-header></nav-header>
        <div class='container'>
            <div class="row">
            </div>

            <div class="row book-container my-detail-row" style="width: 100%">
                <div class="col-md-2">
                    <img class="book-img" :src="book.image"/>
                </div>
                <div class="col-md-5 flex-vertical detail-con">
                    <div>
                        <h4>{{book.title}}</h4>
                    </div>
                    <div class="description-font-margin">
                        <div>
                            <span>作者:</span>
                            <span>{{ book.author | getAuthor }}</span>
                        </div>
                        <div>
                            <span>出版社:</span>
                            <span>{{book.publisher}}</span>
                        </div>
                        <div>
                            <span>出版年：</span>
                            <span>{{book.pubdate}}</span>
                        </div>
                        <div>
                            <span>页数：</span>
                            <span>{{book.pages}}</span>
                        </div>
                        <div>
                            <span>定价：</span>
                            <span>{{book.price | currency('￥')}}元</span>
                        </div>
                        <div>
                            <span>精装：</span>
                            <span>{{book.binding}}</span>
                        </div>
                        <div>
                            <span>ISBN：</span>
                            <span id="isbn">{{book.isbn}}</span>
                        </div>

                        <div class="color-count">
                            <span>{{wish.total}}人想要 / </span>
                            <span>{{gift.total}}人可赠送</span>
                        </div>

                    </div>
                </div>
            </div>
            <div style="margin-top:30px; display: flex" class="row ">

                <div class="col-md-1" v-if="!book.is_in_gift && !book.is_in_wish">
                    <a class="btn btn-outline"
                       href="javascript:;" @click="showSureModal">
                        赠送此书
                    </a>
                </div>
                <div class="col-md-3" v-if="book.is_in_gift && !book.is_in_wish">
                    <span class="bg-info">已添加至赠送清单</span>
                </div>
                <div class="col-md-1 add-name" v-if="!book.is_in_gift && !book.is_in_wish">
                    <a class="btn btn-outline"
                       href="javascript:;" @click="addWish">
                        加入到心愿清单
                    </a>
                </div>
                <div class="col-md-3" v-if="!book.is_in_gift && book.is_in_wish">
                    <span class="bg-info">已添加至心愿清单</span>
                </div>

            </div>

            <div style="margin-top: 30px;" class="row">
                <div class="col-md-2"><span class="description-title">内容简介</span></div>
            </div>
            <div style="margin-top:15px;" class="row">
                <div class="col-md-11">
                    <p class="description-font">
                        {{book.summary}}
                    </p>
                </div>
            </div>

            <div style="margin-top:30px; display: flex" class="row" v-if="!book.is_in_wish && !book.is_in_gift">
                <div class="col-md-3"><span class="description-title">向他们请求此书</span></div>
            </div>

            <div style="margin-top:30px; display: flex" class="row" v-if="book.is_in_wish && !book.is_in_gift">
                <div class="col-md-3"><span class="description-title">向他们请求此书</span></div>
            </div>

            <div style="margin-top:30px; display: flex" class="row" v-if="book.is_in_gift && !book.is_in_wish">
                <div class="col-md-3"><span class="description-title">向他们赠送此书</span></div>
            </div>
            <hr style="margin-top:5px;"/>

<!--            默认状态显示赠送的数据-->
            <div v-if="!book.is_in_wish && !book.is_in_gift" v-for="(item, index) in gift.trades" :key="index" style="margin-top:30px; display: flex" class="row">
                <div class="col-md-1" style="width: 11em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    {{item.nickname}}
                </div>
                <div class="col-md-2 description-font">
                    上传于{{item.time}}
                </div>
                <div class="col-md-2">
                    <a class="btn-normal"
                       :href="'/drift?id='  + item.id">向他请求此书</a>
                </div>
            </div>

            <div v-if="book.is_in_wish && !book.is_in_gift" v-for="(item, index) in gift.trades" :key="index" style="margin-top:30px; display: flex" class="row">
                <div class="col-md-1" style="width: 11em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    {{item.nickname}}
                </div>
                <div class="col-md-2 description-font">
                    上传于{{item.time}}
                </div>
                <div class="col-md-2">
                    <a class="btn-normal"
                       :href="'/drift?id='  + item.id">向他请求此书</a>
                </div>
            </div>

            <div v-if="book.is_in_gift && !book.is_in_wish" v-for="(item, index) in wish.trades" :key="index" style="margin-top:30px; display: flex" class="row">
                <div class="col-md-1" style="width: 11em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    {{item.nickname}}
                </div>
                <div class="col-md-2 description-font">
                    上传于{{item.time}}
                </div>
                <div class="col-md-2">
                    <a class="btn-normal"
                       :href="'/drift?id='  + item.id">向他赠送此书</a>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
        <Modal title="赠送确认" v-model="sureModal">
            <div>
                <h5 class="diag-title">
                    您确定拥有《{{book.title}}》这本书吗？</h5>
                <p id="modal1Desc" class="description-font">
                    如果您不想赠送此书，或者没有这本书，请不要随意发布虚假信息。谢谢你的支持和理解。
                </p>
            </div>
            <div slot="footer">
                <Button type="primary" style="color: #ffffff;" size="large" @click="sureSend">确定赠送</Button>
                <Button type="error" style="color: #ffffff;" size="large" @click="closeSureModal">不，算了</Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavFooter from "../components/NavFooter";
    import {getBookInfo} from "../../../api/books";
    import {printError} from "../../util/printError";
    import {sureSend} from "../../../api/gift";
    import {addWish} from "../../../api/wish";

    export default {
        name: "detail",
        components: {NavFooter, NavHeader},
        data() {
            return {
                book: {},
                sureModal: false,
                gift: {},
                wish: {}
            }
        },
        methods: {
            init() {
                this.getBookInfo()
            },
            getBookInfo() {
                let isbn = this.$route.query.isbn
                getBookInfo({isbn: isbn}).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.book = data.result
                        this.gift = this.book.gift
                        this.wish = this.book.wish
                    } else {
                        this.$Message.error(data.msg)
                    }
                })
            },
            sureSend() {
                sureSend({isbn: this.book.isbn}).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.$Message.success("已添加到赠送清单")
                        this.closeSureModal()
                    } else {
                        printError(this, data)
                    }
                })
            },
            addWish() {
                addWish({isbn: this.book.isbn}).then(res => {
                    let data = res.data
                    if (data.code === 0) {
                        this.$Message.success("成功添加到心愿清单")
                    } else {
                        printError(this, data)
                    }
                })
            },
            showSureModal() {
                this.sureModal = true
            },
            closeSureModal() {
                this.sureModal = false
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

    html.remodal-is-locked {
        overflow: hidden;

        -ms-touch-action: none;
        touch-action: none;
    }

    /* Anti FOUC */

    .remodal,
    [data-remodal-id] {
        display: none;
    }

    /* Necessary styles of the overlay */

    .remodal-overlay {
        position: fixed;
        z-index: 9999;
        top: -5000px;
        right: -5000px;
        bottom: -5000px;
        left: -5000px;

        display: none;
    }

    /* Necessary styles of the wrapper */

    .remodal-wrapper {
        position: fixed;
        z-index: 10000;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        display: none;
        overflow: auto;

        text-align: center;

        -webkit-overflow-scrolling: touch;
    }

    .remodal-wrapper:after {
        display: inline-block;

        height: 100%;
        margin-left: -0.05em;

        content: "";
    }

    /* Fix iPad, iPhone glitches */

    .remodal-overlay,
    .remodal-wrapper {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    /* Necessary styles of the modal dialog */

    .remodal {
        position: relative;

        outline: none;

        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        text-size-adjust: 100%;
    }

    .remodal-is-initialized {
        /* Disable Anti-FOUC */
        display: inline-block;
    }

    /*
 *  Remodal - v1.1.1
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

    /* ==========================================================================
       Remodal's default mobile first theme
       ========================================================================== */

    /* Default theme styles for the background */

    .remodal-bg.remodal-is-opening,
    .remodal-bg.remodal-is-opened {
        -webkit-filter: blur(3px);
        filter: blur(3px);
    }

    /* Default theme styles of the overlay */

    .remodal-overlay {
        background: rgba(43, 46, 56, 0.9);
    }

    .remodal-overlay.remodal-is-opening,
    .remodal-overlay.remodal-is-closing {
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .remodal-overlay.remodal-is-opening {
        -webkit-animation-name: remodal-overlay-opening-keyframes;
        animation-name: remodal-overlay-opening-keyframes;
    }

    .remodal-overlay.remodal-is-closing {
        -webkit-animation-name: remodal-overlay-closing-keyframes;
        animation-name: remodal-overlay-closing-keyframes;
    }

    /* Default theme styles of the wrapper */

    .remodal-wrapper {
        padding: 10px 10px 0;
    }

    /* Default theme styles of the modal dialog */

    .remodal {
        box-sizing: border-box;
        width: 100%;
        margin-bottom: 10px;
        padding: 35px;

        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);

        color: #2b2e38;
        background: #fff;
    }

    .remodal.remodal-is-opening,
    .remodal.remodal-is-closing {
        -webkit-animation-duration: 0.3s;
        animation-duration: 0.3s;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
    }

    .remodal.remodal-is-opening {
        -webkit-animation-name: remodal-opening-keyframes;
        animation-name: remodal-opening-keyframes;
    }

    .remodal.remodal-is-closing {
        -webkit-animation-name: remodal-closing-keyframes;
        animation-name: remodal-closing-keyframes;
    }

    /* Vertical align of the modal dialog */

    .remodal,
    .remodal-wrapper:after {
        vertical-align: middle;
    }

    /* Close button */

    .remodal-close {
        position: absolute;
        top: 0;
        left: 0;

        display: block;
        overflow: visible;

        width: 35px;
        height: 35px;
        margin: 0;
        padding: 0;

        cursor: pointer;
        -webkit-transition: color 0.2s;
        transition: color 0.2s;
        text-decoration: none;

        color: #95979c;
        border: 0;
        outline: 0;
        background: transparent;
    }

    .remodal-close:hover,
    .remodal-close:focus {
        color: #2b2e38;
    }

    .remodal-close:before {
        font-family: Arial, "Helvetica CY", "Nimbus Sans L", sans-serif !important;
        font-size: 25px;
        line-height: 35px;

        position: absolute;
        top: 0;
        left: 0;

        display: block;

        width: 35px;

        content: "\00d7";
        text-align: center;
    }

    /* Dialog buttons */

    .remodal-confirm,
    .remodal-cancel {
        font: inherit;

        display: inline-block;
        overflow: visible;

        min-width: 110px;
        margin: 0;
        padding: 12px 0;

        cursor: pointer;
        -webkit-transition: background 0.2s;
        transition: background 0.2s;
        text-align: center;
        vertical-align: middle;
        text-decoration: none;

        border: 0;
        outline: 0;
    }

    .remodal-confirm {
        color: #fff;
        background: #81c784;
    }

    .remodal-confirm:hover,
    .remodal-confirm:focus {
        background: #66bb6a;
    }

    .remodal-cancel {
        color: #fff;
        background: #e57373;
    }

    .remodal-cancel:hover,
    .remodal-cancel:focus {
        background: #ef5350;
    }

    /* Remove inner padding and border in Firefox 4+ for the button tag. */

    .remodal-confirm::-moz-focus-inner,
    .remodal-cancel::-moz-focus-inner,
    .remodal-close::-moz-focus-inner {
        padding: 0;

        border: 0;
    }

    /* Keyframes
       ========================================================================== */

    @-webkit-keyframes remodal-opening-keyframes {
        from {
            -webkit-transform: scale(1.05);
            transform: scale(1.05);

            opacity: 0;
        }
        to {
            -webkit-transform: none;
            transform: none;

            opacity: 1;

            -webkit-filter: blur(0);
            filter: blur(0);
        }
    }

    @keyframes remodal-opening-keyframes {
        from {
            -webkit-transform: scale(1.05);
            transform: scale(1.05);

            opacity: 0;
        }
        to {
            -webkit-transform: none;
            transform: none;

            opacity: 1;

            -webkit-filter: blur(0);
            filter: blur(0);
        }
    }

    @-webkit-keyframes remodal-closing-keyframes {
        from {
            -webkit-transform: scale(1);
            transform: scale(1);

            opacity: 1;
        }
        to {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);

            opacity: 0;

            -webkit-filter: blur(0);
            filter: blur(0);
        }
    }

    @keyframes remodal-closing-keyframes {
        from {
            -webkit-transform: scale(1);
            transform: scale(1);

            opacity: 1;
        }
        to {
            -webkit-transform: scale(0.95);
            transform: scale(0.95);

            opacity: 0;

            -webkit-filter: blur(0);
            filter: blur(0);
        }
    }

    @-webkit-keyframes remodal-overlay-opening-keyframes {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes remodal-overlay-opening-keyframes {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-webkit-keyframes remodal-overlay-closing-keyframes {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    @keyframes remodal-overlay-closing-keyframes {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    /* Media queries
       ========================================================================== */

    @media only screen and (min-width: 641px) {
        .remodal {
            max-width: 700px;
        }
    }

    /* IE8
       ========================================================================== */

    .lt-ie9 .remodal-overlay {
        background: #2b2e38;
    }

    .lt-ie9 .remodal {
        width: 700px;
    }

    .book-img {
        box-shadow: 0 5px 9.5px 0.5px rgba(184, 187, 192, 0.75);
        /* For IE 8 */
        -ms-filter: "progid:DXImageTransform.Microsoft.Shadow(Strength=4, Direction=135, Color='#000000')";
        /* For IE 5.5 - 7 */
        filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#000000');
        height: 240px;
        width: 160px;
    }

    .book-container {
        margin-top: 55px;
        display: flex;
    }

    .description-font-margin {
        color: #8e8E8E;
        font-size: 14px;
        font-weight: normal;
        margin-top: 12px;
    }

    .description-font-margin div {
        margin-bottom: 3px;
    }

    .description-font-margin .color-count {
        color: #826762;
        font-weight: 500;
    }

    .diag-title {
        margin-bottom: 30px;
        font-weight: 700;
        color: #826762;
    }

    .remodal-confirm,
    .remodal-cancel {
        padding: 5px;
        min-width: 80px;
        border-radius: 3px;
    }

    .remodal-confirm {
        margin-right: 30px;
        color: #fff;
        background: #826762;
    }

    .remodal-confirm:hover,
    .remodal-confirm:focus {
        background: #66bb6a;
    }

    .remodal-cancel {
        color: #fff;
        background: #41464B;
    }

    .remodal-cancel:hover,
    .remodal-cancel:focus {
        background: #ef5350;
    }

    .detail-con {
        margin-left: 30px;
    }

    .add-name {
        margin-left: 30px;
    }
</style>
