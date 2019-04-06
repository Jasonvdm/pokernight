<template>
    <b-container class="app">
        <b-row>
            <Balance />
            <TransactionsTable />
        </b-row>
    </b-container>
</template>

<script>
    import TransactionsTable from './TransactionsTable.vue'
    import Balance from './Balance.vue'

    export default {
        name: 'Dashboard',
        components: {
            TransactionsTable,
            Balance
        },
        data () {
            return {}
        },
        beforeMount () {
            this.$store.dispatch('user/fetchUserData');
        }
    }
</script>

<style>

</style>