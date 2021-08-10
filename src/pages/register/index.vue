<template>
  <div class="register">
    <div class="top">
      <span class="fh"> <van-icon name="arrow-left" @click="gohome"/></span>
      <span class="dl">用户注册</span>
    </div>
    <!--  -->

    <van-form @submit="onSubmit" class="from">
      <input type="file" />
      <van-field
        v-model="name"
        name="昵称"
        label="昵称"
        placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]"
      />
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
          >注册</van-button
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
.from {
  margin-top: 50px;
}
</style>
