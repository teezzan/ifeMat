import Vue from "vue";
// import Home from "../Landing/Index.vue";
// import About from "../Landing/Index.vue";
// import LandingPage from "../Main/Landing/LandingPage.vue";
import VueRouter from "vue-router";
import Charts from "../Main/Graphs/Charts.vue";
import About from "../Landing/Pages/About.vue";
import Home from "../Landing/Pages/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/graphs",
    name: "Charts",
    component: Charts,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
