import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from './components/Login.vue'
import Hello from './components/HelloWorld.vue'
import Profile from './components/Profile.vue'
import LoginSuccess from './components/LoginSuccess.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            component: Hello
        },        
        {
            path: '/profile',
            component: Profile,
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/loginSuccess',
            component: LoginSuccess
        },
    ]
})