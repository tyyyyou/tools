import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';
import login from './modules/login';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '11'
    },
    modules: {
        test,
        login
    },
})