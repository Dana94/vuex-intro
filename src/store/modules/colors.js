const state = {
    colors: []
}

const mutations = {
    ADD_COLOR(state, {color}) {
        state.colors.push(color);
    },
    REMOVE_COLOR(state, color) {
        state.colors = state.colors.filter(aColor => aColor !== color);
    }
};

const actions = {
    addColor({commit}, payload) {
        // commit('ADD_COLOR', payload);
        commit({
            type: 'ADD_COLOR',
            color: payload
        });

    },
    removeColor({commit}, payload) {
        commit('REMOVE_COLOR', payload)
    }
};

const getters = {
    getColors(state) {
        return state.colors;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}
