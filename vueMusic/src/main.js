// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from "axios"
import { MenuItem, Menu,Tabs,TabPane,Icon } from 'element-ui';
import "./assets/iconfont/iconfont.css"

Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
Vue.use(MenuItem);
Vue.use(Menu);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
