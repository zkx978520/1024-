<template>
  <div class="">
    <!-- 头部 -->
    <van-nav-bar
      title="延误补贴"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <!--  -->
    <van-image
      width="257"
      height="129"
      class="pic1"
      src="https://s10.mogucdn.com/mlcdn/c45406/170919_197b25j595641f94987777jak44ce_514x259.png"
    />
    <p class="p1">啊哦，我还是空的Σ( ° △ °|||)︴</p>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    onClickLeft() {
      this.$router.push("/user/yunfei");
    },
  },
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
