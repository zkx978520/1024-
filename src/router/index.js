import Vue from "vue";
import VueRouter from "vue-router";
//
import Home from "../pages/home";
import Fenlei from "../pages/fenlei";
import classify from "../pages/classify";
import Cart from "../pages/cart";
import User from "../pages/user";
import Register from "../pages/register";
import Login from "../pages/login";
import Detail from "../pages/detail";
import wodezhuye from "../pages/user/wodezhuye";
import liaotian from "../pages/user/liaotian";
import shoucang from "../pages/user/shoucang";
import guanzhu from "../pages/user/guanzhu";
import dingdan from "../pages/user/dingdan";
import xiugai from "../pages/user/xiugai";
//
Vue.use(VueRouter);
//
const router = new VueRouter({
  routes: [
    // 默认首页
    {
      path: "/",
      redirect: "/home",
      meta: { footShow: true },
    },
    // 注册
    {
      path: "/register",
      name: "Register",
      component: Register,
      meta: { footShow: false },
    },
    // 登录
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { footShow: false },
    },
    // 首页
    {
      path: "/home",
      name: "Home",
      component: Home,
      meta: { footShow: true },
    },
    //详情页
    {
      path: "/detail/:id",
      name: "Detail",
      component: Detail,
      meta: { footShow: true },
    },
    //分类页
    {
      path: "/fenlei",
      name: "Fenlei",
      component: Fenlei,
      meta: { footShow: true },
    },
    //分类页--------
    {
      path: "/classify",
      name: "classify",
      component: classify,
      meta: { footShow: true },
    },
    //购物车页
    {
      path: "/cart",
      name: "Cart",
      component: Cart,
      meta: { footShow: true },
    },
    //用户信息页
    {
      path: "/user",
      name: "User",
      component: User,
      meta: { footShow: true, requiresAuth: true },
    },
    {
      path: "/user/wodezhuye",
      name: "wodezhuye",
      component: wodezhuye,
    },
    {
      path: "/user/liaotian",
      name: "liaotian",
      component: liaotian,
    },
    {
      path: "/user/shoucang",
      name: "shoucang",
      component: shoucang,
    },
    {
      path: "/user/guanzhu",
      name: "guanzhu",
      component: guanzhu,
    },
    {
      path: "/user/dingdan",
      name: "dingdan",
      component: dingdan,
    },
    {
      path: "/user/xiugai",
      name: "xiugai",
      component: xiugai,
    },
  ],
});
// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
//
export default router;
