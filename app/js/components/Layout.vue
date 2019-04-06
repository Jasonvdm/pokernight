<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand href="#">🎰 For The Boys</b-navbar-brand>

            <b-navbar-toggle target="nav_collapse" />

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item href="#/login">Login</b-nav-item>
                    <b-nav-item href="#/dashboard">Dashboard</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content"><em>User</em></template>
                        <b-dropdown-item href="#/admin">Admin</b-dropdown-item>
                        <b-dropdown-item href="#/logout">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
        <b-container>
            <slot/>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'Layout',
        data () {
            return {}
        }
    }
</script>

<style>

</style>
