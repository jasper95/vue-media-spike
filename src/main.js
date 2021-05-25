import Vue from "vue";
import App from "./App.vue";
import VueRecord from "@codekraft-studio/vue-record";

Vue.use(VueRecord);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
