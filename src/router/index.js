import Vue from "vue";
import Router from "vue-router";
import Login from "../components/LoginForm.vue";
import Dashboard from "../components/Dashboard/DashboardView.vue";

Vue.use(Router);

const router = new Router({
  mode: 'history',
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
    },
  ],
});



export default router;
