<template>
    <div>
        <nav-header></nav-header>
        <div class='container'>
            <div class="row">
            </div>

            <div class="row book-container my-detail-row" style="width: 100%">
                <div class="col-md-2">
                    <img class="book-img" src="https://img1.doubanio.com/lpic/s1738888.jpg"/>
                </div>
                <div class="col-md-5 flex-vertical detail-con">
                    <div>
                        <h4>东京奇谭集</h4>
                    </div>
                    <div class="description-font-margin">
                        <div>
                            <span>作者:</span>
                            <span>[日]村上春树</span>
                        </div>
                        <div>
                            <span>出版社:</span>
                            <span>上海译文出版社</span>
                        </div>
                        <div>
                            <span>出版年：</span>
                            <span>2006-7</span>
                        </div>
                        <div>
                            <span>页数：</span>
                            <span>148</span>
                        </div>
                        <div>
                            <span>定价：</span>
                            <span>￥13.00元</span>
                        </div>
                        <div>
                            <span>精装：</span>
                            <span>平装</span>
                        </div>
                        <div>
                            <span>ISBN：</span>
                            <span id="isbn">9787532740536</span>
                        </div>

                        <div class="color-count">
                            <span>2人想要 / </span>
                            <span>4人可赠送</span>
                        </div>

                    </div>
                </div>
            </div>
            <div style="margin-top:30px; display: flex" class="row ">

                <div class="col-md-1">
                    <a class="btn btn-outline"
                       href="#modal">
                        赠送此书
                    </a>
                </div>
                <div class="col-md-1 add-name">
                    <a class="btn btn-outline"
                       href="/wish/book/9787532740536">
                        加入到心愿清单
                    </a>
                </div>

            </div>
            <div style="margin-top: 30px;" class="row">
                <div class="col-md-2"><span class="description-title">内容简介</span></div>
            </div>
            <div style="margin-top:15px;" class="row">
                <div class="col-md-11">
                    <p class="description-font">
                        《东京奇谭集》收有五部短篇小说，分别为《偶然的旅人》、《哈纳莱伊湾》、《在可能找见的地方，无论哪里》、《天天移动的肾脏石块》和《品川猴》。五篇奇谭中最奇的是最后一篇《品川猴》。一个叫安藤瑞纪的年轻女子得了一种“忘名症”，每星期有一两次想不起自己的名字，几经周折，查明“忘名症”起因于一只猴……虽说是“奇谭”，但村上春树在小说中讨论的仍然是形而上的人生问题。\n谭通谈，奇谭即奇谈、奇闻之意。众所周知，村上小说的篇名大多声东击西，避实就虚，而这部短篇集却表里如一，果然是发生在东京的奇谭。小说通过偶然性突出了人生命运的神秘感。\n在这部短篇集里，村上春树一如既往，依然在不动声色地拆除着现实与非现实或此岸世界与彼岸世界之间的篱笆，依然像鹰一样在潜意识王国上空盘旋着，寻找更深更暗的底层，依然力图从庸常的世俗生活中剥离出灵魂信息和人性机微。</p>
                </div>
            </div>

            <div style="margin-top:30px; display: flex" class="row">
                <div class="col-md-3"><span class="description-title">向他们请求此书</span></div>
            </div>
            <hr style="margin-top:5px;"/>

            <div style="margin-top:30px; display: flex" class="row">
                <div class="col-md-1" style="width: 11em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    leet2
                </div>
                <div class="col-md-2 description-font">
                    上传于2018-09-17
                </div>
                <div class="col-md-2">
                    <a class="btn-normal"
                       href="/drift/455">向他请求此书</a>
                </div>
            </div>

            <div style="margin-top:30px; display: flex" class="row">
                <div class="col-md-1" style="width: 11em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    ivan
                </div>
                <div class="col-md-2 description-font">
                    上传于2018-09-18
                </div>
                <div class="col-md-2">
                    <a class="btn-normal"
                       href="/drift/460">向他请求此书</a>
                </div>
            </div>

            <div style="margin-top:30px; display: flex" class="row">
                <div class="col-md-1" style="width: 11em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    八月
                </div>
                <div class="col-md-2 description-font">
                    上传于2019-04-05
                </div>
                <div class="col-md-2">
                    <a class="btn-normal"
                       href="/drift/476">向他请求此书</a>
                </div>
            </div>

            <div style="margin-top:30px; display: flex" class="row">
                <div class="col-md-1" style="width: 11em;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
                    iceberg
                </div>
                <div class="col-md-2 description-font">
                    上传于2019-05-27
                </div>
                <div class="col-md-2">
                    <a class="btn-normal"
                       href="/drift/730">向他请求此书</a>
                </div>
            </div>


            <div class="remodal" data-remodal-id="modal" role="dialog"
                 aria-labelledby="modal1Title" aria-describedby="modal1Desc"
                 data-remodal-options="closeOnOutsideClick: false">
                <button data-remodal-action="close" class="remodal-close"
                        aria-label="Close"></button>
                <div>
                    <h5 class="diag-title">
                        您确定拥有《东京奇谭集》这本书吗？</h5>
                    <p id="modal1Desc" class="description-font">
                        如果您不想赠送此书，或者没有这本书，请不要随意发布虚假信息。谢谢你的支持和理解。
                    </p>
                </div>
                <br>
                <button data-remodal-action="confirm" class="remodal-confirm">确定赠送</button>
                <button data-remodal-action="cancel" class="remodal-cancel">不，算了</button>
            </div>

        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import NavHeader from "../components/NavHeader";
    import NavFooter from "../components/NavFooter";
    import '../../../static/css/bootstrap.min.css';

    export default {
        name: "detail",
        components: {NavFooter, NavHeader}
    }
</script>

<style scoped>

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
