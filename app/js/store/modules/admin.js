import Api from '../../Api'

const state = {
    transactions: null
};

const getters = {
    getAllTransactions: (state, getters, rootState) => {
        return state.transactions ? state.transactions : [];
    }
};

const actions = {
    fetchAllTransactions ({ commit, state }) {
        return Api().get('/admin/transactions').then(function (response) {
            if (response.status === 200) {
                commit('setAllTransactions', response.data);
            }
        });
    },
    approveTransaction ({ commit, dispatch }, transactionId) {
        Api().put('/admin/transactions', {
            id: transactionId,
            status: true
        }).then(function (response) {
            if (response.status === 200) {
                dispatch('fetchAllTransactions');
            }
        });
    },
    declineTransaction ({ commit, dispatch }, transactionId) {
        Api().put('/admin/transactions', {
            id: transactionId,
            status: false
        }).then(function (response) {
            if (response.status === 200) {
                dispatch('fetchAllTransactions');
            }
        });
    }
};

const mutations = {
    setAllTransactions (state, transactionsData) {
        state.transactions = transactionsData.map((transaction) => {
            return {
                id: transaction.id,
                date: new Date(transaction.date).getMonth() + '/' + new Date(transaction.date).getDate(),
                user: transaction.user,
                amount: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2
                }).format(transaction.amount),
                total: new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2
                }).format(transaction.balance),
                status: transaction.status
            };
        })
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}