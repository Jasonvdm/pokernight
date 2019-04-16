<template>
    <div>
        <Balance />
        <q-card v-for="game in games" light color="orange-12" class="q-ma-sm">
            <q-card-title>
                Game Night: {{ game.date | moment("M/D") }}
                <span slot="subtitle">$5 will be subtracted from your balance once you join</span>
                <q-icon slot="left" name="alarm" />
            </q-card-title>
            <q-card-main>
                Players: {{ game.playerCount }}
            </q-card-main>
            <q-card-separator />
            <q-card-actions>
                <q-btn color="brown-12">Join</q-btn>
            </q-card-actions>
        </q-card>
        <q-list highlight inset-separator>
            <q-item v-for="transaction in transactions" multiline>
                <q-item-side avatar="https://png.pngtree.com/svg/20161230/483acea99c.svg" />
                <q-item-main
                        :label="transaction.amount"
                        label-lines="1"
                        :sublabel="transaction.type === 'cash_out' ? 'Cash Out' : 'Buy In'"
                        sublabel-lines="1"
                />
                <q-item-side right>
                    <q-item-tile stamp>{{ transaction.date }}</q-item-tile>
                </q-item-side>
            </q-item>
        </q-list>
    </div>
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
        computed: {
            games() {
                return this.$store.getters['admin/getAllFutureGames'];
            },
            transactions() {
                return this.$store.getters['user/getUserTransactions'];
            },
        },
        beforeMount () {
            this.$store.dispatch('user/fetchUserData');
        }
    }
</script>

<style>

</style>