import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Manage from "../views/Manage.vue";
import Register from "../views/Register.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/manage",
    name: "manage",
    component: Manage
  },

  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
];

const router = new VueRouter({
  routes
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ["/", "/home", "/login", "/register"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("NerdBro-User");

//   // try to access a restricted page + not logged in
//   if (authRequired && !loggedIn) {
//     return next("/login");
//   }
//   console.log(to);
//   console.log(from);
//   next();
// });

export default router;
