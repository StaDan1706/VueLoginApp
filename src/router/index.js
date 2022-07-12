import Vue from "vue";
import Router from "vue-router";
import Login from "../views/LoginPage.vue"
import Dashboard from "../views/DashboardPage.vue"

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
