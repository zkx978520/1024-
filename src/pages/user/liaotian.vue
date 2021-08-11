<template>
  <div class="">
    <van-nav-bar
      title="聊天"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
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
      this.$router.push("/user");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
