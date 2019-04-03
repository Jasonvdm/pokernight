<template>
    <b-container class="app">
        <b-row>
            <h1 class="text-center">For The Boys</h1>
        </b-row>
        <b-row>
            <div v-if="false">
                <Balance></Balance>
                <TransactionsTable></TransactionsTable>
            </div>
            <div style="width: 100%;" v-else>
                <Login></Login>
            </div>
        </b-row>
    </b-container>
</template>

<script>
    import TransactionsTable from './components/TransactionsTable.vue'
    import Balance from './components/Balance.vue'
    import Login from './components/Login.vue'

    export default {
        name: 'app',
        components: {
            TransactionsTable,
            Balance,
            Login
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
