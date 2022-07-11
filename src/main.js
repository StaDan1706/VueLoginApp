import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import VueCompositionAPI from '@vue/composition-api'
import { createPinia, PiniaVuePlugin } from "pinia";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_VUE_APP_FIREBASE_API_KEY,
  authDomain:
    import.meta.env.VITE_VUE_APP_FIREBASE_PROJECT_ID + "firebaseapp.com",
  projectId: import.meta.env.VITE_VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket:
    import.meta.env.VITE_VUE_APP_FIREBASE_PROJECT_ID + ".appspot.com",
  messagingSenderId: "1021585384697",
  appId: "1:1021585384697:web:4e1ba27e35222731ceee28",
  measurementId: "G-6QTE54YV55",
};

firebase.initializeApp(firebaseConfig);

new Vue({
  pinia,
  vuetify,
  router,
  VueCompositionAPI,
  render: (h) => h(App),
}).$mount("#app");
