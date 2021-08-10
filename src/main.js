import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import "vant/lib/index.css";
import router from "./router";
import './assets/css/reset.css'
import { Search } from 'vant';

Vue.use(Search);

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
