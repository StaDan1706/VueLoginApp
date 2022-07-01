import Vue from "vue";
import App from "./App.vue";
import VueCompositionAPI from "@vue/composition-api";
import { createPinia, PiniaVuePlugin } from "pinia";
import vuetify from "./plugins/vuetify";
import router from "./router";

const pinia = createPinia();

Vue.use(PiniaVuePlugin);
Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  pinia,
  render: (h) => h(App),
}).$mount("#app");
