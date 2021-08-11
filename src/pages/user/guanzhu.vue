<template>
  <div class="">
    <van-tabs v-model="activeName">
      <van-tab title="用户" name="a">
        <van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/mlcdn/c45406/180827_85cllljbch3ac6824126i244e836i_257x129.png"
        />
        <p class="p1">TA还没有关注任何人</p>
      </van-tab>

      <van-tab title="店铺" name="c">
        <van-image
          width="257"
          height="129"
          class="pic1"
          src="https://s10.mogucdn.com/p2/161118/upload_8djbjd0daffce09e0h7e5g564bcbi_479x238.jpg"
        />
        <p class="p1">你还没有关注任何店铺哦~</p></van-tab
      >
    </van-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeName: "a",
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
.p1 {
  font-size: 16px;
  margin-top: 20px;
  margin-left: 10px;
  margin-left: 100px;
}
.pic1 {
  margin-top: 50px;
  margin-left: 60px;
}
</style>
