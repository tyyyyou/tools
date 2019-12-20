const state = {id: ''};

const getters = {
    decoId: (state) => {
        return `我的id是${state.id}`;
    }
}

const mutations = {
    setId (state, {id}) {
        state.id = id;
    }
}

const actions = {
    queryId ({commit}) {
        setTimeout(() => {
            commit('setId', {id: '1'});
        }, 1000)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}