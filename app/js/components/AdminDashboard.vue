<template>
    <b-container class="balance">
        <b-row>
            <h2 style="margin-bottom: 15px;">Pending Transactions</h2>
        </b-row>
        <b-row>
            <b-table
                    id="myTable"
                    :fields="fields"
                    :items="pendingTransactions"
                    :per-page="perPage"
                    :current-page="currentPage"
                    striped hover small
            >
                <template slot="approval" slot-scope="data">
                    <b-button v-if="data.item.status === null" size="sm" variant="success" @click="approveTransaction(data.item.id)">Approve</b-button>
                    <b-button v-if="data.item.status === null" size="sm" variant="danger" @click="declineTransaction(data.item.id)">Decline</b-button>
                </template>
            </b-table>
            <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="myTable"
                    size="sm"
                    class="mt-4"
            >
                <span class="text-success" slot="first-text">First</span>
                <span class="text-danger" slot="prev-text">Prev</span>
                <span class="text-warning" slot="next-text">Next</span>
                <span class="text-info" slot="last-text">Last</span>
                <span slot="page" slot-scope="{ page, active }">
                    <b v-if="active">{{ page }}</b>
                    <i v-else>{{ page }}</i>
                </span>
            </b-pagination>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'AdminDashboard',
        data () {
            return {
                perPage: 5,
                currentPage: 1,
                fields: [
                    'date',
                    'user',
                    'amount',
                    'approval'
                ]
            }
        },
        computed: {
            rows() {
                return this.pendingTransactions.length
            },
            pendingTransactions() {
                return this.$store.getters['admin/getAllTransactions']
                    .filter((transaction) => {
                        return transaction.status === null;
                    });
            },
        },
        methods: {
            approveTransaction(transactionId) {
                this.$store.dispatch('admin/approveTransaction', transactionId);
            },
            declineTransaction(transactionId) {
                this.$store.dispatch('admin/declineTransaction', transactionId);
            }
        },
        beforeMount () {
            this.$store.dispatch('admin/fetchAllTransactions');
        }
    }
</script>

<style>

</style>