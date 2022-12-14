import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
//重写push和replace方法，解决多次点击的问题
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this,location,()=>{},()=>{})
  }
};

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
      name: "home",
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: { show: true },
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
      name: "login",
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
      name: "register",
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
