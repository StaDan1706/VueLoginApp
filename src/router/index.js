import Vue from "vue";
import Router from "vue-router";
import Login from "../components/LoginForm.vue";
import Dashboard from "../components/DashboardView.vue";

Vue.use(Router);

const router = new Router({

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
