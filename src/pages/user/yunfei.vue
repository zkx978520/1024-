<template>
  <div class="app">
    <!-- 头部 -->
    <van-nav-bar
      title="补贴与保障"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 个人信息 -->
    <div class="geren">
      <div class="con" v-if="cont">
        <img :src="cont.avatar" alt="" class="pic" />
        <p class="nam">{{ cont.nickName }}</p>
        <p class="namm">补贴与保障让你在蘑菇街安心购物</p>
      </div>
    </div>
    <!-- 订单补贴 -->
    <div class="butie">
      <div class="top">
        <p>我的订单补贴</p>
      </div>
      <!--  -->
      <van-tabbar v-model="active" class="but">
        <!-- <van-tabbar-item badge="4">
          <span></span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item> -->
        <van-tabbar-item icon="card" :to="{ name: 'tuihuo' }"
          >退货运费</van-tabbar-item
        >
        <van-tabbar-item icon="logistics" :to="{ name: 'yanwu' }"
          >延误补贴</van-tabbar-item
        >
        <van-tabbar-item icon="shopping-cart" :to="{ name: 'tunhuo' }"
          >囤货无忧</van-tabbar-item
        >
        <van-tabbar-item icon="balance-list-o" :to="{ name: 'huanxin' }"
          >意外换新</van-tabbar-item
        >
      </van-tabbar>
    </div>
    <!-- 补贴 -->
    <div class="tab1">
      <div class="top">
        <p>我的订单补贴</p>
      </div>
      <p class="bto">啊哦，我还是空的Σ( ° △ °|||)︴</p>
    </div>
  </div>
</template>

<script>
import { userInfoApi } from "../../api/user";
export default {
  components: {},
  data() {
    return {
      cont: [],
      active: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
  computed: {},
  watch: {},

  methods: {
    //获取用户信息
    async pro() {
      const result = await userInfoApi({});
      console.log(result);
      this.cont = result.data;
      console.log(this.cont);
    },
    //头部返回用户页面
    onClickLeft() {
      this.$router.push("/user");
    },
  },
  created() {
    this.pro();
  },
  mounted() {},
};
</script>
<style scoped>
.app {
  height: 665px;
  background: gainsboro;
}
.geren {
  width: 100%;
  height: 150px;
  background: red;
}
/*  */
.butie {
  width: 345px;
  height: 165px;
  background: #fff;
  margin: -30px auto;
  border-radius: 10px;
}
.butie .top {
  width: 345px;
  height: 40px;
  border-bottom: 1px solid black;
}
.butie .top p {
  float: left;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 900;
}
.but {
  width: 345px;
  height: 80px;
  margin-left: 14px;
  position: fixed;
  left: 0;
  top: 235px;
}

/*  */
.tab1 {
  width: 345px;
  height: 165px;
  background: #fff;
  margin: 60px auto;
  border-radius: 10px;
}
.tab1 .top {
  width: 345px;
  height: 40px;
  border-bottom: 1px solid black;
}
.tab1 .top p {
  float: left;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 14px;
  font-weight: 900;
}
.bto {
  font-size: 14px;
  margin-top: 60px;
  margin-left: 90px;
}
/*  */
.con {
  width: 33%;
  height: 100px;
  float: left;
}
.pic {
  width: 80px;
  height: 80px;
  background: black;
  border-radius: 50%;
  margin: 20px 15px 10px;
  float: left;
}
.nam {
  font-size: 20px;
  text-align: center;
  float: left;
  margin-left: 120px;
  margin-top: -80px;
  color: #fff;
}
.namm {
  width: 200px;
  font-size: 12px;
  margin-left: 120px;
  margin-top: 60px;
  color: #fff;
}
</style>
