export default {
    state: {
        username: ''
    },
    mutations: {
        setUsername (state, username) {
            state.username = username;
        }
    },
    actions: {
        validate: async ({commit}, axiosInstance) => {
            const r = await axiosInstance();
            if (r.data.code == 1) {
                return false;
            }
            const {token, username} = r.data;
            localStorage.setItem('token', token);
            commit('setUsername', username)
            return true;
        }
    }
}