<template>
    <Layout>
        <router-view></router-view>
    </Layout>
</template>

<script>
    import Layout from './components/Layout.vue'

    export default {
        name: 'app',
        components: {
            Layout
        },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>

<style lang="stylus">
    $color-pack = false

    @import '~vuetify/src/stylus/main'
</style>
