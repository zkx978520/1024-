<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route v-if="$route.meta.footShow">
      <van-tabbar-item icon="home-o" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" :to="{ name: 'Fenlei' }"
        >分类</van-tabbar-item
      >
      <van-tabbar-item icon="friends-o" :to="{ name: 'Cart' }"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="setting-o" :to="{ name: 'User' }"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
