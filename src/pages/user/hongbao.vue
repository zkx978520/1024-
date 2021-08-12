<template>
  <div class="">
    <!-- 头部 -->
    <van-nav-bar
      title="我的优惠券"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 标签栏 -->
    <van-tabs v-model="active" class="zong">
      <van-tab title="全部">
        <div class="zxc">
          <img
            src="https://s10.mogucdn.com/p2/161213/upload_27e7gegi3f9acl5e05f3951if5855_514x260.png"
            alt=""
            class="pic"
          />
          <p class="piv">您还没有任何优惠券哦~</p>
        </div>
      </van-tab>
      <van-tab title="店铺券"
        ><div class="zxc">
          <img
            src="https://s10.mogucdn.com/p2/161213/upload_27e7gegi3f9acl5e05f3951if5855_514x260.png"
            alt=""
            class="pic"
          />
          <p class="piv">您还没有任何优惠券哦~</p>
        </div></van-tab
      >
      <van-tab title="活动优惠券"
        ><div class="zxc">
          <img
            src="https://s10.mogucdn.com/p2/161213/upload_27e7gegi3f9acl5e05f3951if5855_514x260.png"
            alt=""
            class="pic"
          />
          <p class="piv">您还没有任何优惠券哦~</p>
        </div></van-tab
      >
      <van-tab title="支付红包"
        ><div class="zxc">
          <img
            src="https://s10.mogucdn.com/p2/161213/upload_27e7gegi3f9acl5e05f3951if5855_514x260.png"
            alt=""
            class="pic"
          />
          <p class="piv">您还没有红包哦~</p>
        </div></van-tab
      >
    </van-tabs>
    <!--  -->
  </div>
</template>

<script>
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
    //头部返回用户页面
    onClickLeft() {
      this.$router.push("/user");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.zong {
  height: 620px;
  background: gainsboro;
}
.zxc {
  width: 300px;
  height: 300px;
  background: #fff;
  margin: 50px auto;
  overflow: hidden;
}
.pic {
  width: 257px;
  height: 130px;
  margin: 70px auto 0;
}
.piv {
  font-size: 14px;
  margin-top: 20px;
  margin-left: 80px;
}
</style>
