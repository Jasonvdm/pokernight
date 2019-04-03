import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import BootstrapVue from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import 'vuetify/dist/vuetify.css'

import App from './App.vue'
import store from './store'

Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(Vuex);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
