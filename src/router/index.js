import Vue from "vue";
import Router from "vue-router";
import Login from "../components/LoginForm.vue";
import Dashboard from "../components/DashboardView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      props: {},
    },
  ],
});
