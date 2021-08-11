<template>
  <div class="">
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      right-text="编辑"
      left-arrow
      @click-left="onClickLeft"
    />
    <!--  -->
    <van-tabs v-model="activeName">
      <van-tab title="商品" name="a">
        <van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/p2/161118/upload_8djbjd0daffce09e0h7e5g564bcbi_479x238.jpg"
        />
        <p class="p1">你还没有收藏任何商品哦!</p>
      </van-tab>
      <van-tab title="搭配" name="b">
        <van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/p2/161118/upload_8djbjd0daffce09e0h7e5g564bcbi_479x238.jpg"
        />
        <p class="p1">你还没有收藏任何搭配哦!</p></van-tab
      >
      <van-tab title="LOOK" name="c">
        <van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/mlcdn/c45406/171208_4e64659625h69h555554d13fc5374_514x259.png"
        />
        <p class="p1">你还没有流浪任何商品哦!</p></van-tab
      >
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeName: "a",
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.p1 {
  font-size: 16px;
  margin-top: 20px;
  margin-left: 10px;
  margin-left: 100px;
}
.pic1 {
  margin-top: 50px;
  margin-left: 60px;
}
</style>
