import Vue from "vue";
import App from "./App.vue";
// import router from "./router";
import store from "./store/index";

import "bulma/css/bulma.css";
import router from "./router";
import { MdIcon } from "vue-material/dist/components";

Vue.config.productionTip = false;
Vue.use(MdIcon);

new Vue({
  // router,
  store,

  router,
  render: h => h(App)
}).$mount("#app");
