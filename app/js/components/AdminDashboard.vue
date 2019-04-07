<template>
    <div class="balance">
        <div v-if="loading" class="loader">
            <q-spinner-facebook color="blue-grey-6" :size="60" />
        </div>
        <div class="q-pa-sm" v-else>
            <q-table
                    title="Pending Transactions"
                    :data="pendingTransactions"
                    :columns="fields"
                    selection="multiple"
                    :selected.sync="selectedSecond"
                    row-key="id"
                    size="lg"
            >
                <template slot="top-selection" slot-scope="props">
                    <q-btn color="secondary" flat label="Approve" class="q-mr-sm" @click="approveTransaction()" />
                    <q-btn color="negative" flat label="Decline" @click="declineTransaction()" />
                </template>
            </q-table>

            <!--<b-row>-->
                <!--<b-table-->
                        <!--id="myTable"-->
                        <!--:fields="fields"-->
                        <!--:items="pendingTransactions"-->
                        <!--:per-page="perPage"-->
                        <!--:current-page="currentPage"-->
                        <!--striped hover small-->
                <!--&gt;-->
                    <!--<template slot="approval" slot-scope="data">-->
                        <!--<b-button v-if="data.item.status === null" size="sm" variant="success" @click="approveTransaction(data.item.id)">Approve</b-button>-->
                        <!--<b-button v-if="data.item.status === null" size="sm" variant="danger" @click="declineTransaction(data.item.id)">Decline</b-button>-->
                    <!--</template>-->
                <!--</b-table>-->
                <!--<b-pagination-->
                        <!--v-model="currentPage"-->
                        <!--:total-rows="rows"-->
                        <!--:per-page="perPage"-->
                        <!--aria-controls="myTable"-->
                        <!--size="sm"-->
                        <!--class="mt-4"-->
                <!--&gt;-->
                    <!--<span class="text-success" slot="first-text">First</span>-->
                    <!--<span class="text-danger" slot="prev-text">Prev</span>-->
                    <!--<span class="text-warning" slot="next-text">Next</span>-->
                    <!--<span class="text-info" slot="last-text">Last</span>-->
                    <!--<span slot="page" slot-scope="{ page, active }">-->
                    <!--<b v-if="active">{{ page }}</b>-->
                    <!--<i v-else>{{ page }}</i>-->
                <!--</span>-->
                <!--</b-pagination>-->
            <!--</b-row>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdminDashboard',
        data () {
            return {
                perPage: 5,
                currentPage: 1,
                loading: true,
                selectedSecond: [
                ],
                pagination: {
                    sortBy: null, // String, column "name" property value
                    descending: false,
                    page: 1,
                    rowsPerPage: 5 // current rows per page being displayed
                },
                fields: [
                    {
                        name: 'date',
                        required: true,
                        label: 'Date',
                        align: 'left',
                        field: 'date',
                        sortable: true,
                        classes: 'my-class',
                        style: ''
                    },
                    {
                        name: 'user',
                        required: true,
                        label: 'User',
                        align: 'left',
                        field: 'user',
                        sortable: true,
                        classes: 'my-class',
                        style: ''
                    },
                    {
                        name: 'amount',
                        required: true,
                        label: 'Amount',
                        align: 'left',
                        field: 'amount',
                        sortable: true,
                        classes: 'my-class',
                        style: ''
                    }
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
                // this.selectedSecond
                //this.$store.dispatch('admin/approveTransaction', transactionId);
            },
            declineTransaction(transactionId) {
                // this.selectedSecond
                //this.$store.dispatch('admin/declineTransaction', transactionId);
            }
        },
        beforeMount () {
            let self = this;
            this.$store.dispatch('admin/fetchAllTransactions')
                .then(() => {
                    self.$data.loading = false;
                });
        }
    }
</script>

<style lang="scss" scoped>
    .loader {
        position: fixed; /* or absolute */
        top: 50%;
        left: 43%;
    }
</style>