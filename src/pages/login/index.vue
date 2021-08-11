<template>
  <div class="login">
    <!-- <div class="top">
      <span class="fh"> <van-icon name="arrow-left" @click="gohome"/></span>
      <span class="dl">用户登录</span>
      <span class="zc" @click="goregister">注册</span>
    </div> -->
    <van-nav-bar
      title="登录界面"
      left-text="返回"
      right-text="注册"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <!--  -->

    <van-form @submit="onSubmit" class="from">
      <van-field
        v-model="username"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />

      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { loginApi } from "../../api/user";
import { setToken } from "../../utils/auth";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    async onSubmit(values) {
      const result = await loginApi({ ...values });
      console.log(result);
      if (result.data.code === "success") {
        setToken(result.data.token);
        Toast.success("登陆成功");
        this.$router.push("/");
      }
    },
    //
    onClickLeft() {
      Toast("返回");
      this.$router.push("/home");
    },
    onClickRight() {
      Toast("注册");
      this.$router.push("/register");
    },
    //
    // gohome() {
    //   this.$router.push("/home");
    // },
    // //
    // goregister() {
    //   this.$router.push("/register");
    // },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #666;
}
.fh {
  width: 20%;
  height: 50px;
  float: left;
  line-height: 50px;
  text-align: center;
  font-size: 25px;
  margin-left: -15px;
}
.dl {
  width: 60%;
  height: 50px;
  float: left;
  line-height: 50px;
  text-align: center;
  margin-left: 10px;
}
.zc {
  width: 20%;
  height: 50px;
  float: right;
  line-height: 50px;
  text-align: center;
}
.from {
  margin-top: 50px;
}
</style>
