// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '../store'
import 'iview/dist/styles/iview.css';
import iview from 'iview'
import {currency} from "./util/currency";
import {getAuthor} from "./util/getAuthor";

Vue.use(iview)
Vue.filter("currency", currency)
Vue.filter("getAuthor", getAuthor)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
