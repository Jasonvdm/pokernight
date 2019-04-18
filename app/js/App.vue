<template>
    <q-layout>
        <q-layout-drawer v-model="leftDrawer" side="left">
            yo
        </q-layout-drawer>
        <q-page-container>
            <q-toolbar color="blue-grey-6">
                <q-icon size="lg" name="fas fa-chess-king" />
                <q-toolbar-title>
                    PokerNight
                    <span slot="subtitle">
                      For the boys
                    </span>
                </q-toolbar-title>
                <q-btn
                        :color="navColor('stats')"
                        @click="navigate('stats')"
                        size="lg"
                        flat round dense icon="show_chart"></q-btn>
                <q-btn
                        :color="navColor('dashboard')"
                        @click="navigate('dashboard')"
                        size="lg"
                        flat round dense icon="account_circle"></q-btn>
                <q-btn
                        :color="navColor('admin')"
                        @click="navigate('admin')"
                        size="lg"
                        flat round dense icon="fas fa-user-shield"></q-btn>
            </q-toolbar>
            <q-ajax-bar color="orange-12" />
            <q-page padding>
                <router-view></router-view>
            </q-page>
        </q-page-container>
    </q-layout>
</template>

<script>
    import Layout from './components/Layout.vue'

    export default {
        name: 'app',
        components: {
            Layout
        },
        data () {
            return {
                leftDrawer: false,
                loading: false
            }
        },
        computed: {},
        methods: {
            refresher (done) {
                // done - Function to call when you made all necessary updates.
                //        DO NOT forget to call it otherwise the refresh message
                //        will continue to be displayed

                // make some Ajax call then call done()
                done();
            },
            navigate (page) {
                this.$router.push(page);
            },
            navColor(color) {
                return color === this.$router.currentRoute.name ? 'orange-12' : 'light'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .q-toolbar-title {
        text-align: left;
        padding-left: 10px;
    }
</style>
