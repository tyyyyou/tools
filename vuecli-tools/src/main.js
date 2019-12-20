import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import 'vant/lib/index.css';
import api from './api';
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.prototype.$api = api; // 将api挂载到vue的原型上，便于全局调用
Vue.use(ElementUI)

const blackList = ['/profile']; // 白名单，不需要登录的路由
router.beforeEach(async(to, from, next) => {
  if (!blackList.includes(to.path)) {
    return next();
  }
  const flag = await store.dispatch('validate', Vue.prototype.$api.login.validate); // 校验token是否过期
  if (flag) {
    next()
  } else {
    next('/login');
  }
})

new Vue({
  store,
  render: h => h(App),
  router,
}).$mount('#app')
