import Api from '../../Api'

const state = {
    transactions: null,
    games: [
        {
            'id': '4',
            'date': new Date('4/17/19'),
            'playerCount': 6,
        },
        {
            'id': '3',
            'date': new Date('4/10/19'),
            'playerCount': 5,
        },
        {
            'id': '2',
            'date': new Date('4/9/19'),
            'playerCount': 8,
        },
        {
            'id': '1',
            'date': new Date('4/5/19'),
            'playerCount': 3,
        },
    ]
};

const getters = {
    getAllTransactions: (state, getters, rootState) => {
        return state.transactions ? state.transactions : [];
    },
    getAllGames: () => {
        return state.games;
    },
    getAllFutureGames: () => {
        return state.games.filter((game) => { return game.date >= new Date() });
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
    fetchAllGames ({ commit, state }) {
        // TODO
    },
    approveTransaction ({ commit, dispatch }, transactionIds) {
        transactionIds.forEach((transactionId) => {
            Api().put('/admin/transactions', {
                id: transactionId,
                status: true
            }).then(function (response) {
                if (response.status === 200) {
                    commit('markTransactionApproved', transactionId);
                }
            });
        });
    },
    declineTransaction ({ commit, dispatch }, transactionIds) {
        transactionIds.forEach((transactionId) => {
            Api().put('/admin/transactions', {
                id: transactionId,
                status: false
            }).then(function (response) {
                if (response.status === 200) {
                    commit('markTransactionDeclined', transactionId);
                }
            });
        });
    },
    addGame ({ commit, dispatch }, newGameDate) {
        // Api().post('/admin/games', {
        //     date: newGameDate
        // }).then(function (response) {
        //     if (response.status === 200) {
                commit('addGame', {
                    id: 5,
                    date: new Date(newGameDate),
                    playerCount: 0
                });
            // }
        // });
    }
};

const mutations = {
    addGame (state, game) {
        state.games.unshift(game);
    },
    markTransactionApproved (state, transactionId) {
        state.transactions.map(function (e) {
            if (e.id === transactionId) {
                e.status = true
            }
        });
    },
    markTransactionDeclined (state, transactionId) {
        state.transactions.map(function (e) {
            if (e.id === transactionId) {
                e.status = false
            }
        });
    },
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