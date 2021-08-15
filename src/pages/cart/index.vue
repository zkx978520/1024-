<template>
  <div class="cart">
    <!-- 顶部 -->
    <div class="header">
      <p class="iconfont icon-houtui" @click="goback"></p>
      <p class="p2">购物车({{ list.length }})</p>
      <p class="p3" @click="delshow">
        {{ msg }}&nbsp;<span class="iconfont icon-msg"></span>
      </p>
    </div>
    <!-- 商品列表-->
    <ul>
      <li v-for="(item, i) in list" :key="item._id + i">
        <van-checkbox v-model="item.checked" checked-color="#ee0a24"
          >商品{{ i + 1 }}</van-checkbox
        >
        <div class="lititle">
          <img :src="item.product.coverImg" alt="" />
          <div class="maincon">
            <h5>{{ item.product.name }}</h5>
            <div class="priceAnum">
              <h4><span>￥</span>{{ item.product.price }}</h4>
              <p>
                <span
                  @click="item.quantity > 1 && updatePro(item.product._id, -1)"
                  >-</span
                >
                <span class="number">{{ item.quantity }}</span>
                <span @click="updatePro(item.product._id, 1)">+</span>
              </p>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- 空状态 -->
    <div class="empty">
      <van-empty description="你的购物车空空的" v-show="play">
        <van-button round type="danger" class="bottom-button" @click="goshop"
          >去逛逛</van-button
        >
      </van-empty>
    </div>
    <!-- 结算 -->
    <div class="count">
      <van-submit-bar
        :price="totalPrice * 100"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checked" checked-color="#ee0a24"
          >全选</van-checkbox
        >
        <!-- 弹出层 -->
        <van-popup
          v-model="show"
          round
          position="bottom"
          :style="{ height: '50%' }"
          class="tanchu"
        >
          <van-address-list
            v-model="chosenAddressId"
            :list="addressList"
            :add-button-text="addbuttontext"
            @add="onAdd"
            @edit="onEdit"
            @click-item="onClickItem"
          />
        </van-popup>
      </van-submit-bar>
    </div>
    <!-- 删除 -->
    <div class="del" v-show="flag">
      <van-checkbox class="allcheck" v-model="checked" checked-color="#ee0a24"
        >全选</van-checkbox
      >
      <van-button class="delbtn" type="danger" round @click="delcarts"
        >删&nbsp;除</van-button
      >
    </div>
  </div>
</template>

<script>
import { post } from "../../utils/request";
import { addorder, adresslist, adressload } from "../../api/order";
import { loadCartlist, addToCart } from "../../api/cart";
import { Toast } from "vant";

export default {
  components: {},
  data() {
    return {
      list: [],
      play: false,
      flag: false,
      show: false,
      msg: "管理",
      chosenAddressId: "1",
      addressList: [],
      getAddressByIdList: [],
      addbuttontext: "",
    };
  },
  computed: {
    // 全选
    checked: {
      set(flag) {
        this.list.map((item) => this.$set(item, "checked", flag));
      },
      get() {
        return (
          this.list.length ==
          this.list.filter((item) => item.checked == true).length
        );
      },
    },
    // 总价
    totalPrice() {
      return this.list
        .filter((item) => {
          return item.checked;
        })
        .reduce(function (lasttime, now) {
          return lasttime + now.product.price * now.quantity; //商品价格*购物车此商品的数量
        }, 0);
    },
    // 获取选中的购物车列表
    selectgoods() {
      var selectlist = [];
      this.list.forEach((item) => {
        if (item.checked) {
          selectlist.push({
            quantity: item.quantity,
            product: item._id,
            price: item.product.price,
          });
        }
      });
      return selectlist;
    },

    // 获取选中购物车的id
    selectId() {
      var idlist = [];
      this.list.forEach((item) => {
        if (item.checked) {
          idlist.push(item._id);
        }
      });
      return idlist;
    },
  },
  watch: {},

  methods: {
    //  加载购物车列表
    async getcartlist() {
      let token = localStorage.getItem("token");
      console.log(token);
      if (token == null) {
        this.$router.push("/login");
      } else {
        const result = await loadCartlist();
        console.log(result);
        this.list = result.data;
        if (result.data.length == 0) {
          this.play = true;
        }
      }
    },
    //  加载购物车列表
    // async getcartlist() {
    //   const result = await loadCartlist();
    //   console.log(result);
    //   this.list = result.data;
    //   if (result.data.length==0) {
    //     this.play=true
    //   }
    // },

    // 更新购物车数量
    async updatePro(id, num) {
      await addToCart(id, num);
      this.list.forEach((data) => {
        if (data.product._id == id) {
          data.quantity = data.quantity + num;
        }
      });
    },

    //  批量删除
    delshow() {
      if (this.msg == "管理") {
        this.flag = true;
        this.msg = "完成";
      } else {
        this.flag = false;
        this.msg = "管理";
      }
    },
    async delcarts() {
      const result = await post("/api/v1/shop_carts/delmany", {
        ids: this.selectId,
      });
      console.log(result);
      await this.getcartlist();
      // this.flag = false;
    },
    // 返回上一页
    goback() {
      this.$router.go(-1);
    },
    // 空状态下跳转home
    goshop() {
      this.$router.push("/home");
    },

    // 提交订单
    async onSubmit() {
      this.show = true;
      // console.log(this.selectgoods);
      // const result = await addorder({
      //   receiver: "张三",
      //   regions: "123456778",
      //   address: "55667788",
      //   orderDetails: this.selectgoods,
      // });
      // console.log(result);
    },
    //获取地址列表添加到addressList
    async getaddress() {
      const addres = await adresslist();
      if (addres.data.addresses.length == 0) {
        this.addbuttontext = "新增地址";
      } else {
        this.addbuttontext = "确认";
        this.chosenAddressId = addres.data.addresses[0]._id;
        addres.data.addresses.forEach((item) => {
          this.addressList.push({
            id: item._id,
            name: item.receiver,
            tel: item.mobile,
            address: item.regions,
          });
        });
      }
    },

    //提交订单
    async onAdd() {
      console.log(111);
      console.log(this.getAddressByIdList);
      this.show = false;
      console.log(this.getAddressByIdList.receiver);
      console.log(this.getAddressByIdList.regions);
      console.log(this.getAddressByIdList.regions);
      console.log(this.selectgoods);
      if (this.addbuttontext == "确认") {
        const res = await addorder({
          receiver: this.getAddressByIdList.receiver,
          regions: this.getAddressByIdList.regions,
          address: this.getAddressByIdList.regions,
          orderDetails: this.selectgoods,
        });
        console.log(res);
        this.$router.push("/user/dingdan");
        // if (res.data.code == "success") {
        //   Toast.success("加入订单成功");
        //   this.getcartlist();
        //   setTimeout(() => {
        //     this.$router.push("/user/dingdan");
        //     // this.$router.push({
        //     //   path: "/user/dingdan",
        //     //   query: {
        //     //     address: res.data.info.order,
        //     //   },
        //     // });
        //   }, 2000);
        // }
      } else {
        this.$router.push("/adress");
      }
    },

    //点击地址获得id
    async onClickItem(item) {
      console.log(item);
      const getaddres = await adressload(item.id);
      console.log(getaddres.data);
      this.getAddressByIdList = getaddres.data;
    },
    //修改地址
    onEdit(item, index) {
      Toast("编辑地址:" + index);
    },
  },
  created() {
    this.getcartlist();
    if (this.addressList.length == 0) {
      this.getaddress();
    }
  },
  mounted() {},
};
</script>
<style scoped>
html {
  background-color: #efefef;
}
.cart {
  background-color: #efefef;
  min-height: 700px;
}
.header {
  width: 100%;
  height: 44px;
  color: #5e5e5e;
  /* padding: 0px 30px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #999;
  background-color: #fafafa;
  position: fixed;
  left: 0;
  top: 0;
}
/* .header .p1{
      padding-left: 35px;
    } */
.header .p2 {
  font-size: 18px;
}
.header .p3 {
  font-size: 14px;
  padding-right: 15px;
}
/* 购物车列表 */
.cart {
  padding-top: 45px;
}
.cart ul {
  margin: 10px 10px 10px 10px;
}
.cart ul li {
  margin-top: 10px;
  background-color: #fff;
  border-radius: 5px;
  /* margin-bottom: 10px; */
  /* padding-bottom: 30px; */
  padding: 15px 20px;
}
.cart ul li img {
  width: 90px;
}
.cart ul li .lititle {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.cart ul li .lititle .maincon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart ul li .lititle .maincon .priceAnum {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart ul li .lititle .maincon .priceAnum h4 {
  color: #ff4466;
  font-size: 16px;
}
.cart ul li .lititle .maincon .priceAnum h4 span {
  color: #ff4466;
  font-size: 12px;
}
.cart ul li .lititle .maincon .priceAnum p span {
  display: inline-block;
  width: 25px;
  height: 22px;
  font-size: 12px;
  background-color: #f7f7f7;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
}
/* 空状态 */
.bottom-button {
  width: 160px;
  height: 40px;
}
/* 删除模块 */
.del {
  width: 355.33px;
  height: 50px;
  padding: 0 16px;
  background-color: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.del .allcheck {
  font-size: 16px;
}
.del .delbtn {
  width: 120px;
  height: 40px;
  font-size: 16px;
}
</style>