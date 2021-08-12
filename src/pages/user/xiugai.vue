<template>
  <div class="">
    <!-- 导航栏 -->
    <van-nav-bar
      title="编辑资料"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!--  -->
    <van-tabs v-model="active">
      <van-tab title="修改密码">
        <van-form @submit="onSubmit">
          <van-field
            v-model="oldPassword"
            name="oldPassword"
            label="原密码"
            placeholder="原密码"
            :rules="[{ required: true, message: '请填写原密码' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="新密码"
            placeholder="新密码"
            :rules="[{ required: true, message: '请填写新密码' }]"
          />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </van-tab>
      <van-tab title="修改昵称-头像"
        ><van-form @submit="onSubmits">
          <!-- <van-field
            v-model="oldnickName"
            name="oldnickName"
            label="原昵称"
            placeholder="原昵称"
            :rules="[{ required: true, message: '请填写原昵称' }]"
          /> -->
          <van-field
            v-model="nickName"
            type="nickName"
            name="nickName"
            label="新昵称"
            placeholder="新昵称"
            :rules="[{ required: true, message: '请填写新昵称' }]"
          />
          <van-uploader :after-read="afterRead" class="mom" />
          <img :src="this.img" alt="" class="dod" />
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form></van-tab
      >
    </van-tabs>
    <!-- 修改密码表单 -->

    <!--  -->
  </div>
</template>

<script>
import { Toast } from "vant";
import { userInfoApi } from "../../api/user";
import { changePwdApi } from "../../api/user";
import { changeInfoApi } from "../../api/user";

export default {
  components: {},
  data() {
    return {
      active: "2",
      oldPassword: "",
      password: "",
      // oldnickName: "",
      nickName: "",
      img: null,
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 导航栏功能
    onClickLeft() {
      Toast("返回成功");
      this.$router.push("/user");
    },
    // 获取用户信息
    async str() {
      const result = await userInfoApi({});
      console.log(result);
    },
    //修改密码功能
    async onSubmit(values) {
      console.log("submit", values);
      console.log(this.oldPassword);
      console.log(this.password);
      const result = await changePwdApi(this.oldPassword, this.password);
      console.log(result);

      if (result.data.code === "success") {
        this.$router.push("/user");
        Toast("修改密码成功");
      }
    },
    // 修改昵称功能
    async onSubmits(values) {
      console.log("submit", values);
      const result = await changeInfoApi(this.nickName, this.img);
      console.log(result);
      if (result.data.code === "success") {
        this.$router.push("/user");
        Toast("修改成功");
      }
    },
    // 修改头像
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.img = file.content;
      console.log(this.img);
    },
    //
  },
  created() {
    this.str();
  },
  mounted() {},
};
</script>
<style scoped>
.mom {
  margin-left: 10px;
  margin-top: 10px;
  float: left;
}
.dod {
  width: 80px;
  height: 80px;
  float: left;
  margin-left: 10px;
  margin-top: 10px;
}
</style>
