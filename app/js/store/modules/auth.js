import Api from '../../Api'

const state = {
    token: null
};

const getters = {
    // isLoggedIn: (state, getters, rootState) => {
    //     return state.loggedIn;
    // }
};

const actions = {
    login ({ commit, state }, credentials) {
        Api().post('/authenticate_player', {
            'username': credentials.username,
            'code': credentials.code
        }).then(function (response) {
            if (response.status === 200) {
                commit('setSessionToken', response.data);
            }
        });
    }
};

const mutations = {
    setSessionToken (state, { token }) {
        state.token = token;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}