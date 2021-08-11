<template>
  <div class="dingdan">
    <van-nav-bar
      title="订单列表"
      left-text="返回"
      right-text="购物车"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!--  -->
    <van-tabs v-model="active">
      <van-tab title="待付款">
        <van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
        />
        <p class="p1">还没有相关订单哦!</p>
      </van-tab>
      <van-tab title="待发货"
        ><van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
        />
        <p class="p1">还没有相关订单哦!</p></van-tab
      >
      <van-tab title="待收货"
        ><van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
        />
        <p class="p1">还没有相关订单哦!</p></van-tab
      >
      <van-tab title="待评价"
        ><van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
        />
        <p class="p1">还没有相关订单哦!</p></van-tab
      >
      <van-tab title="售后"
        ><van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
        />
        <p class="p1">还没有相关订单哦!</p></van-tab
      >
    </van-tabs>
  </div>
</template>
shopping-cart-o
<script>
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      active: 0,
    };
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user");
    },
    onClickRight() {
      Toast("按钮");
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

  margin-left: 120px;
}
.pic1 {
  margin-top: 50px;
  margin-left: 60px;
}
</style>
