import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import AtUI from 'at-ui'


import "./bootstrap.min.css"

import "bootstrap-vue/dist/bootstrap-vue.css"

import 'vuetify/dist/vuetify.css'

import App from './App.vue'
import store from './store'

import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(AtUI);

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    }
];

const router = new VueRouter({
    routes
});

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
