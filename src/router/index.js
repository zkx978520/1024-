import Vue from "vue";
import VueRouter from "vue-router";
//
import Home from "../pages/home";
import Fenlei from "../pages/fenlei";
import Cart from "../pages/cart";
import User from "../pages/user";
import Register from "../pages/register";
import Login from "../pages/login";
import Detail from "../pages/detail";
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
      meta: { footShow: true },
    },
  ],
});
//
export default router;