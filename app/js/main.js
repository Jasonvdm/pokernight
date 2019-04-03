import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import AtUI from 'at-ui'


import "./bootstrap.min.css"

import "bootstrap-vue/dist/bootstrap-vue.css"

import 'vuetify/dist/vuetify.css'

import App from './App.vue'
import store from './store'

Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(AtUI);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});
