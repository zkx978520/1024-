<template>
  <div class="mine">
    <div class="top">
      <div class="con" v-if="cont">
        <img :src="cont.avatar" alt="" class="pic" />
        <p class="nam">{{ cont.nickName }}</p>
      </div>
      <div class="con">
        <span class="spa1">0</span>
        <span class="spa2">粉丝</span>
      </div>
      <div class="con">
        <span class="spa1">0</span>
        <span class="spa2">关注</span>
      </div>
    </div>
    <div class="but">
      <van-image
        width="257"
        height="129"
        class="pic1"
        src="https://s10.mogucdn.com/mlcdn/c45406/180827_85cllljbch3ac6824126i244e836i_257x129.png"
      />
      <p>TA还没有更新状态！</p>
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
    };
  },
  computed: {},
  watch: {},

  methods: {
    async pro() {
      const result = await userInfoApi({});
      console.log(result);
      this.cont = result.data;
      console.log(this.cont);
    },
  },
  created() {
    this.pro();
  },
  mounted() {},
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 200px;
  background: #fff;
}
.con {
  width: 33%;
  height: 250px;
  float: left;
}
.pic {
  width: 80px;
  height: 80px;
  background: black;
  border-radius: 50%;
  margin: 20px 15px 10px;
}
.nam {
  margin-top: 10px;
  font-size: 20px;
  margin: 20px 10px 10px;
  text-align: center;
}
.but {
  width: 100%;
  height: 450px;
  background: gainsboro;
}
.but p {
  font-size: 16px;
  margin: 50px 130px;
  float: left;
}
.spa1 {
  width: 100%;
  float: left;
  margin: 50px 50% 10px;
  font-size: 16px;
}
.spa2 {
  width: 100%;
  float: left;
  margin: 10px 50px 10px;
  font-size: 16px;
}
.pic1 {
  margin-left: 60px;
}
</style>
