//import shop from '../../api/shop'
import Api from '../../Api'
// initial state
// shape: [{ id, quantity }]
const state = {
    items: [],
    checkoutStatus: null
};

// getters
const getters = {
    isLoggedIn: (state, getters, rootState) => {
        return state.loggedIn;
    }
};

// actions
const actions = {
    login ({ commit, state }, credentials) {
        // const savedCartItems = [...state.items]
        // commit('setCheckoutStatus', null)
        // // empty cart
        // commit('setCartItems', { items: [] })
        Api().get('/wordwise/entries?limit=1&headword=');
    }
}

// mutations
const mutations = {
    pushProductToCart (state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}