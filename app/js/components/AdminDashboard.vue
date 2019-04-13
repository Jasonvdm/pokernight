<template>
    <div class="balance">
        <div v-if="isLoading" class="loader">
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
                    <q-btn color="secondary" label="Approve" class="q-mr-sm" @click="approveTransaction()" />
                    <q-btn color="negative" label="Decline" @click="declineTransaction()" />
                </template>
            </q-table>
            <q-table
                    title="Games"
                    :data="games"
                    :columns="gamesFields"
                    row-key="id"
                    size="lg"
                    class="q-mt-lg"
            >
                <template slot="top-right" slot-scope="props">
                    <q-datetime style="width: 170px;" v-model="newGameDate" type="date" />
                    <q-btn color="secondary" flat label="Add" class="q-mr-sm" @click="addGame()" />
                </template>
            </q-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AdminDashboard',
        data () {
            return {
                selectedSecond: [],
                loading: true,
                newGameDate: null,
                gamesFields: [
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
                        name: 'playerCount',
                        required: true,
                        label: 'Players Count',
                        align: 'left',
                        field: 'playerCount',
                        sortable: true,
                        classes: 'my-class',
                        style: ''
                    },
                ],
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
            isLoading () {
                return this.$data.loading;
            },
            rows() {
                return this.pendingTransactions.length
            },
            pendingTransactions() {
                return this.$store.getters['admin/getAllTransactions']
                    .filter((transaction) => {
                        return transaction.status === null;
                    });
            },
            games() {
                return this.$store.getters['admin/getAllGames'];
            }
        },
        methods: {
            approveTransaction() {
                let self = this;
                self.$data.loading = true;
                let transactionIds = this.selectedSecond.map(function (s) { return s.id; });
                this.$store.dispatch('admin/approveTransaction', transactionIds).then(() => {
                    self.$data.loading = false;
                    self.selectedSecond = [];
                });
            },
            declineTransaction() {
                let self = this;
                self.$data.loading = true;
                let transactionIds = this.selectedSecond.map(function (s) { return s.id; });
                this.selectedSecond = [];
                this.$store.dispatch('admin/declineTransaction', transactionIds).then(() => {
                    self.$data.loading = false;
                    self.selectedSecond = [];
                });
            },
            addGame() {
                let self = this;
                self.$data.loading = true;
                this.$store.dispatch('admin/addGame', this.newGameDate).then(() => {
                    self.$data.loading = false;
                });
            }
        },
        beforeMount () {
            let self = this;
            this.$store.dispatch('admin/fetchAllTransactions')
                .then(() => {
                    this.$store.dispatch('admin/fetchAllGames')
                        .then(() => {
                            self.$data.loading = false;
                        });
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