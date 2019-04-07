import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Vue2Filters from 'vue2-filters'
import VueMoment from 'vue-moment'

import Quasar from "quasar-framework/dist/umd/quasar.ios.umd.min.js";
import "quasar-framework/dist/umd/quasar.ios.min.css";
import "quasar-framework/dist/umd/quasar.ios.rtl.min.css";
//import "quasar/dist/quasar.addon.css"
//import "quasar/dist/quasar.rtl.css"

//import "./bootstrap.min.css"

//import "bootstrap-vue/dist/bootstrap-vue.css"

import App from './App.vue'
import store from './store'

import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
import AdminDashboard from './components/AdminDashboard.vue'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(Vue2Filters);
Vue.use(VueMoment);
Vue.use(Quasar);

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
    },
    {
        path: '/admin',
        name: 'admin',
        component: AdminDashboard
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
