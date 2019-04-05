<template>
    <b-container class="transactions-table">
        <b-row><h2>Transactions</h2></b-row>
        <b-row>
            <b-col>
                <div class="shadow text-center p-3 mb-5 bg-light rounded text-white">
                    <p class="font-weight-bold">Best Night</p>
                    <p class="display-3">+$22</p>
                </div>
            </b-col>
            <b-col>
                <div class="shadow text-center p-3 mb-5 bg-danger rounded text-white">
                    <p class="font-weight-bold">Worst Night</p>
                    <p class="display-3">-$15</p>
                </div>  		</b-col>
            <b-col>
                <div class="shadow text-center p-3 mb-5 bg-secondary rounded text-white">
                    <p class="font-weight-bold">Average per Night</p>
                    <p class="display-3">+$4</p>
                </div>  		</b-col>
        </b-row>
        <b-row>
            <b-table
                    id="myTable"
                    :items="items"
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
                currentPage: 1,
                items: [
                    { date: '3/25', amount: '-$5', type: 'Buy In', total: '$43.75' },
                    { date: '3/17', amount: '+$13.75', type: 'Buy Out', total: '$48.75' },
                    { date: '3/17', amount: '-$5', type: 'Buy In', total: '$35' },
                    { date: '3/17', amount: '-$5', type: 'Buy In', total: '$40' }
                ]
            }
        },
        computed: {
            rows() {
                return this.items.length
            }
        }
    }
</script>

<style>

</style>