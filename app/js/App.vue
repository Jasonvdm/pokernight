<template>
    <div>
        <div>
            <b-navbar toggleable="lg" type="dark" variant="primary">
                <b-navbar-brand href="#">🎰 For The Boys</b-navbar-brand>

                <b-navbar-toggle target="nav_collapse" />

                <b-collapse is-nav id="nav_collapse">
                    <b-navbar-nav>
                        <b-nav-item href="#/login">Login</b-nav-item>
                        <b-nav-item v-if="false" href="#" disabled>Disabled</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav v-if="false" class="ml-auto">
                        <b-nav-item-dropdown right>
                            <!-- Using button-content slot -->
                            <template slot="button-content"><em>User</em></template>
                            <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Signout</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <b-container class="app">
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
    </div>
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
