import Vue from "vue";
import Router from "vue-router";
import Login from "../views/LoginPage.vue"
import Dashboard from "../views/DashboardPage.vue"
import NotFoundPage from "../views/NotFoundPage.vue"

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
    {
      path: "/:catchAll(.*)",
      name: "NotFoundPage",
      component: NotFoundPage,
    },
  ],
});



export default router;
