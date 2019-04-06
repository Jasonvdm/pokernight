<template>
    <b-container class="transactions-table">
        <b-row><h2>Transactions</h2></b-row>
        <b-row>
            <b-col>
                <div class="shadow text-center p-3 mb-5 bg-light rounded text-white">
                    <p class="font-weight-bold">Best Night</p>
                    <p class="display-3">{{ statisticsBest | currency }}</p>
                </div>
            </b-col>
            <b-col>
                <div class="shadow text-center p-3 mb-5 bg-danger rounded text-white">
                    <p class="font-weight-bold">Worst Night</p>
                    <p class="display-3">{{ statisticsWorst | currency }}</p>
                </div>  		</b-col>
            <b-col>
                <div class="shadow text-center p-3 mb-5 bg-secondary rounded text-white">
                    <p class="font-weight-bold">Average per Night</p>
                    <p class="display-3">{{ statisticsAvg | currency }}</p>
                </div>  		</b-col>
        </b-row>
        <b-row>
            <b-table
                    id="myTable"
                    :items="transactions"
                    :per-page="perPage"
                    :current-page="currentPage"
                    small striped hover
            />
            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="myTable"
            />
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'TransactionsTable',
        data () {
            return {
                perPage: 5,
                currentPage: 1
            }
        },
        computed: {
            rows() {
                return this.transactions.length
            },
            transactions() {
                return this.$store.getters['user/getUserTransactions'];
            },
            statisticsBest() {
                return this.$store.getters['user/getUserStatistics'].best;
            },
            statisticsWorst() {
                return this.$store.getters['user/getUserStatistics'].worst;
            },
            statisticsAvg() {
                return this.$store.getters['user/getUserStatistics'].average;
            }
        }
    }
</script>

<style>

</style>