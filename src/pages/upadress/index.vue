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
      show-delete
      show-set-default
      show-search-result
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      :address-info="info"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import province_list from "../../area.js";
import { updateadress, adressload } from "../../api/order";
export default {
  components: {},
  data() {
    return {
      areaList: province_list,
      searchResult: [],
      id: "",
      data: "", //页面传的地区编码的值
      info: {},
      areaCode: "",
      item: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 保存
    async onSave(val) {
      console.log(val, this.id);
      let obj = {
        receiver: val.name,
        mobile: val.tel,
        regions: val.province + val.city + val.county + val.addressDetail,
        address: val.addressDetail,
        idDefault: val.isDefault,
      };
      const result = await updateadress(this.id, obj);
      console.log(result);
      if (result.status == 200) {
        Toast.success("修改成功");
        this.$router.push("/myadress");
      }
    },
    // 删除
    onDelete() {},
    // async onDelete(content) {
    //   console.log(content);
    //   const res = await deladress(content.id);
    //   if (res.status == 200) {
    //     Toast.success("删除成功");
    //     this.$router.push("/myadress");
    //   }
    // },

    // 获取修改的地址
    async adressLoad(id) {
      console.log(this.$route.params.id);
      const result = await adressload(id);
      console.log(result);
      const areaCode = localStorage.getItem("areaCode");
      this.info = {
        id: result.data.id,
        name: result.data.receiver,
        tel: result.data.mobile,
        addressDetail: result.data.regions,
        areaCode: areaCode,
      };
      // localStorage.removeItem("areaCode");
    },
    //返回上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
  },
  created() {
    // 传的id值
    this.id = this.$route.params.id;
    this.adressLoad(this.id);
    // 传的地区编码值
  },
  mounted() {},
};
</script>
<style scoped>
</style>