import Vue from "vue";
import FastClick from "fastclick";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css/normalize.css";
import "amfe-flexible";
import "./styles/reset.css";
import "./icons";
import "./plugins/vant.js";
import "vant/lib/index.css";

FastClick.attach(document.body);

import { Row, Col, RadioGroup, Radio } from "vant";

Vue.use(Row).use(Col);
Vue.use(RadioGroup);
Vue.use(Radio);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
