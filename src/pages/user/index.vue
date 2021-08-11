<template>
  <div class="user">
    <div class="top"></div>
    <!--  -->
    <div class="con"></div>
    <!--  -->
    <van-tabbar v-model="active" class="str">
      <van-tabbar-item icon="wap-home">我的主页</van-tabbar-item>
      <van-tabbar-item icon="chat">消息</van-tabbar-item>
      <van-tabbar-item icon="star">收藏</van-tabbar-item>
      <van-tabbar-item icon="goods-collect">关注</van-tabbar-item>
    </van-tabbar>
    <!--  -->
    <div class="wxx">
      <div class="cart">
        <span>购物车</span>
      </div>
      <div class="quan">
        <p>卡券红包&nbsp;&nbsp;&nbsp;&nbsp; <span>6张活动券></span></p>
        <p>补贴保障&nbsp;&nbsp;&nbsp; <span>退货补运费></span></p>
        <p>我的钱包&nbsp;&nbsp;&nbsp; <span>白付美在这></span></p>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="zya">
      <div class="top">
        <p>我的订单 <span>全部></span></p>
      </div>
      <div class="up">
        <van-tabbar v-model="active1" class="str1">
          <van-tabbar-item icon="balance-pay">待付款</van-tabbar-item>
          <van-tabbar-item icon="logistics">待发货</van-tabbar-item>
          <van-tabbar-item icon="gift-card-o">待收货</van-tabbar-item>
          <van-tabbar-item icon="other-pay">评价</van-tabbar-item>
          <van-tabbar-item icon="after-sale">退款售后</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //
      active: 0,
      active1: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
      //
    };
  },
  computed: {},
  watch: {},

  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 100px;
  background: red;
  border-radius: 10px;
  float: left;
}
/* 个人信息+会员 */
.con {
  width: 90%;
  height: 150px;
  background: blue;
  margin: -20px auto 0;
  margin-left: 5%;
  border-radius: 10px;
  float: left;
}
/* 主页收藏关注消息 */
.str {
  width: 90%;
  height: 60px;
  margin-bottom: 360px;
  background: pink;
  margin-left: 5%;
  border-radius: 10px;
  float: left;
}
/*  */
.wxx {
  width: 90%;
  height: 150px;
  background: skyblue;
  float: left;
  margin-top: 90px;
  margin-left: 5%;
  border-radius: 10px;
}
.cart {
  width: 48%;
  height: 150px;
  background: slateblue;
  float: left;
  border-radius: 10px;
}
.cart span {
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
.quan {
  width: 48%;
  height: 150px;
  background: slateblue;
  float: right;
  border-radius: 10px;
}
.quan p {
  font-size: 14px;
  margin-top: 20px;
  padding-bottom: 4px;

  border-bottom: 1px solid #666;
}
.quan span {
  font-size: 14px;
  color: #999;
}
/*  */
.zya {
  width: 90%;
  height: 120px;
  background: springgreen;
  margin-top: 10px;
  float: left;
  margin-left: 5%;
  border-radius: 10px;
}
.zya .top {
  width: 100%;
  height: 50px;
  background: tomato;
}
.zya p {
  font-size: 14px;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #666;
}
.zya span {
  float: right;
  font-size: 14px;
  color: #999;
}
.str1 {
  width: 90%;
  height: 60px;
  margin-bottom: 70px;
  background: pink;
  margin-left: 5%;
  border-radius: 10px;
  float: left;
}
</style>
