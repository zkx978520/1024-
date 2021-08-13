<template>
  <div class="user">
    <div class="top"></div>
    <!--  -->
    <div class="con" v-if="cont" @click="xiugai">
      <img :src="cont.avatar" alt="" class="pic" />
      <p class="nam">{{ cont.nickName }}</p>
      <span class="mn">编辑资料</span>
    </div>
    <!--  -->
    <van-tabbar v-model="active" class="str">
      <van-tabbar-item icon="wap-home" :to="{ name: 'wodezhuye' }"
        >我的主页</van-tabbar-item
      >
      <van-tabbar-item icon="chat" :to="{ name: 'liaotian' }"
        >消息</van-tabbar-item
      >
      <van-tabbar-item icon="star" :to="{ name: 'shoucang' }"
        >收藏</van-tabbar-item
      >
      <van-tabbar-item icon="goods-collect" :to="{ name: 'guanzhu' }"
        >关注</van-tabbar-item
      >
    </van-tabbar>
    <!--  -->
    <div class="wxx">
      <div class="cart" @click="gocart">
        <span>购物车</span>
        <van-image
          width="160"
          height="100"
          class="pic1"
          src="https://s10.mogucdn.com/mlcdn/c45406/190815_3637hh8ac09e50j7f07i7eealck4i_513x360.png"
        />
      </div>
      <div class="quan">
        <p @click="gohb">
          卡券红包&nbsp;&nbsp;&nbsp;&nbsp; <span>我的活动券></span>
        </p>
        <p @click="goyf">补贴保障&nbsp;&nbsp;&nbsp; <span>退货补运费></span></p>
        <p>我的钱包&nbsp;&nbsp;&nbsp; <span>白付美在这></span></p>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="zya">
      <div class="top" @click="godd">
        <p>我的订单 <span>全部></span></p>
      </div>
      <div class="up">
        <van-tabbar v-model="active1" class="str1">
          <van-tabbar-item icon="balance-pay" :to="{ name: 'dingdan' }"
            >待付款</van-tabbar-item
          >
          <van-tabbar-item icon="logistics" :to="{ name: 'dingdan' }"
            >待发货</van-tabbar-item
          >
          <van-tabbar-item icon="gift-card-o" :to="{ name: 'dingdan' }"
            >待收货</van-tabbar-item
          >
          <van-tabbar-item icon="other-pay" :to="{ name: 'dingdan' }"
            >评价</van-tabbar-item
          >
          <van-tabbar-item icon="after-sale" :to="{ name: 'dingdan' }"
            >退款售后</van-tabbar-item
          >
        </van-tabbar>
      </div>
    </div>
    <!--  -->
    <van-button type="warning" class="btn" @click="tuichu">退出登录</van-button>
  </div>
</template>

<script>
import { userInfoApi } from "../../api/user";
// import { removeToken } from "../../utils/auth";
// import { getToken } from "../../utils/auth";
// import { Toast } from "vant";
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
      cont: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    //
    async pro() {
      const result = await userInfoApi({});
      console.log(result);
      this.cont = result.data;
      console.log(this.cont);
    },
    //
    tuichu() {
      // 清空token
      window.localStorage.clear();
      // 跳转到登录页
      this.$router.push("/login");
    },
    //
    godd() {
      this.$router.push("/user/dingdan");
    },
    //
    xiugai() {
      this.$router.push("/user/xiugai");
    },
    // 跳转我的优惠券
    gohb() {
      this.$router.push("/user/hongbao");
    },
    //跳转运费
    goyf() {
      this.$router.push("/user/yunfei");
    },
    // 跳转购物车
    gocart() {
      this.$router.push("/cart");
    },
  },
  created() {
    this.pro();
  },
  mounted() {},
};
</script>
<style scoped>
.user {
  background: gainsboro;
}
/*  */
.top {
  width: 100%;
  height: 80px;
  background: red;
  border-radius: 10px;
  float: left;
}
/* 个人信息+会员 */
.con {
  width: 90%;
  height: 120px;
  background: #fff;
  margin: -20px auto 0;
  margin-left: 5%;
  border-radius: 10px;
  float: left;
}
.pic {
  width: 80px;
  height: 80px;
  background: black;
  border-radius: 50%;
  margin-top: -50px;
  margin-left: 38%;
}
.nam {
  margin-left: 44%;
  margin-top: 10px;
  font-size: 20px;
}
.mn {
  float: left;
  font-size: 16px;
  margin-left: 135px;
  margin-top: 20px;
}
/* 主页收藏关注消息 */
.str {
  width: 90%;
  height: 60px;
  margin-bottom: 420px;
  background: #fff;
  margin-left: 5%;
  border-radius: 10px;
  float: left;
}
/*  */
.wxx {
  width: 90%;
  height: 120px;
  background: gainsboro;
  float: left;
  margin-top: 75px;
  margin-left: 5%;
  border-radius: 10px;
}
.cart {
  width: 48%;
  height: 120px;
  background: #fff;
  float: left;
  border-radius: 10px;
}
.cart span {
  float: left;
  margin-top: 5px;
  margin-left: 5px;
}
.pic1 {
  float: left;
}
.quan {
  width: 48%;
  height: 120px;
  background: #fff;
  float: right;
  border-radius: 10px;
}
.quan p {
  font-size: 12px;
  margin-top: 15px;
  margin-left: 5px;
  margin-right: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #666;
}
.quan span {
  font-size: 12px;
  float: right;
  color: #999;
}
/*  */
.zya {
  width: 90%;
  height: 120px;
  background: #fff;
  margin-top: 10px;
  float: left;
  margin-left: 5%;
  border-radius: 10px;
}
.zya .top {
  width: 100%;
  height: 50px;
  background: #fff;
}
.zya p {
  font-size: 12px;
  margin-top: 20px;
  margin-left: 5px;
  padding-bottom: 10px;
  border-bottom: 1px solid #666;
}
.zya span {
  float: right;
  margin-right: 5px;
  font-size: 12px;
  color: #999;
}
.str1 {
  width: 90%;
  height: 60px;
  margin-bottom: 165px;
  background: #fff;
  margin-left: 5%;
  border-radius: 10px;
  float: left;
}
/*  */
.btn {
  width: 90%;
  height: 50px;
  background: pink;
  margin: 10px auto;
  margin-left: 5%;
}
</style>
