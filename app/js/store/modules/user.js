import Api from '../../Api'

const state = {
    user: null
};

const getters = {
    getUserBalance: (state, getters, rootState) => {
        return state.user ? state.user.balance : 0;
    },
    getUserTransactions: (state, getters, rootState) => {
        return state.user ? state.user.transactions : [];
    },
    getUserStatistics: (state, getters, rootState) => {
        return state.user ? state.user.statistics : {};
    }
};

const actions = {
    fetchUserData ({ commit, state }) {
        Api().get('/player').then(function (response) {
            if (response.status === 200) {
                commit('setUserData', response.data);
            }
        });
    }
};

const mutations = {
    setUserData (state, userData) {
        state.user = {
            balance: userData.transactions.sort(function(a, b) {
                return new Date(b.date).getTime() / 1000 - new Date(a.date).getTime() / 1000
            })[0].balance,
            statistics: userData.statistics,
            transactions: userData.transactions.map((transaction) => {
                return {
                    date: new Date(transaction.date).toISOString().slice(0,10),
                    amount: new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2
                    }).format(transaction.amount),
                    total: new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2
                    }).format(transaction.balance)
                };
            })
        };
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}