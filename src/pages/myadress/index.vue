<template>
  <div class="">
    <van-nav-bar
      title="地址管理"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    >
      <!-- <div class="delanniu">
        <van-button type="danger" @click="del">删除</van-button>
      </div> -->
    </van-address-list>
  </div>
</template>

<script>
import { Toast } from "vant";
import { adresslist, deladress } from "../../api/order";
export default {
  components: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [
        {
          id: "",
          receiver: "",
          mobile: "",
          address: "",
        },
      ],
      otheroobj: "",

      newlist: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 获取地址列表
    async adslist() {
      const result = await adresslist();
      console.log(result);
      result.data.addresses.forEach((item) => {
        this.newlist = {
          id: item._id,
          name: item.receiver,
          tel: item.mobile,
          address: item.regions,
          isDefault: item.isDefault,
        };
        this.list.push(this.newlist);
      });
    },

    // 新增
    onAdd() {
      this.$router.push("/adress");
    },
    // 编辑
    onEdit(item) {
      console.log(item);
      console.log(item.id);
      this.$router.push("/upadress/" + item.id);
    },
    // async onEdit(item) {
    //   await adressload(item.id);
    //   this.$router.push({
    //     path: "/upadress",
    //     query: {
    //       item: JSON.stringify(item),
    //     },
    //   });
    // },
    // 删除
    del() {
      // console.log(val.id);
      this.list.forEach(async (item) => {
        console.log(item);
        const result = await deladress(item.id);
        console.log(result);
      });
    },
    // 回退上一级
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
  },
  created() {
    this.adslist();
  },
  mounted() {},
};
</script>
<style scoped>
.van-address-list {
  position: relative;
  margin-bottom: 34px;
}
.delanniu {
  position: fixed;
  bottom: 50px;
  left: 0;
  padding: 10px;
  background: #fff;
  width: 100%;
}
</style>