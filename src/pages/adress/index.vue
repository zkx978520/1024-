<template>
  <div class="">
    <van-nav-bar
      title="新增地址"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import province_list from "../../area.js";
import { addadress } from "../../api/order";
export default {
  components: {},
  data() {
    return {
      areaList: province_list,
      searchResult: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 添加收货地址
    async onSave(content) {
      console.log(content);
      const regions =
        content.province +
        content.city +
        content.county +
        content.addressDetail;
      const obj = {
        receiver: content.name,
        mobile: content.tel,
        regions,
        address: content.addressDetail,
        idDefault: content.isDefault,

        // province: content.province,
        // city: content.city,
        // county: content.county,
        areaCode: content.areaCode,
      };
      localStorage.setItem("areaCode", content.areaCode);

      const result = await addadress(obj);
      console.log(result);
      // this.$router.push("/myadress");
      if (result.data.code == "success") {
        Toast.success("新增地址成功！");
        // console.log(this.regions);
        this.$router.push({
          path: "/myadress",
        });
      }
    },
    // 删除
    onDelete() {
      Toast("delete");
    },

    //返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>