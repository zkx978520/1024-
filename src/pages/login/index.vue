<template>
  <div class="register">
    <div class="top">
      <span class="fh"> <van-icon name="arrow-left" @click="gohome"/></span>
      <span class="dl">用户登录</span>
      <span class="zc" @click="goregister">注册</span>
    </div>
    <!--  -->

    <van-form @submit="onSubmit" class="from">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
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
export default {
  components: {},
  data() {
    return {
      name: "",
      username: "",
      password: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    onSubmit(value) {
      console.log(value);
    },
    gohome() {
      this.$router.push("/home");
    },
    //
    goregister() {
      this.$router.push("/register");
    },
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
