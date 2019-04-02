import Vue from 'vue'
import Vuetify from 'vuetify'
import BootstrapVue from "bootstrap-vue"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'

Vue.use(Vuetify)
Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    render: h => h(App)
})
