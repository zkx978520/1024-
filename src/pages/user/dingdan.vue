<template>
  <div class="order">
    <!-- 顶部导航 -->
    <van-nav-bar right-text="" @click-left="onClickLeft">
      <template #left>
        <b style="font-weight: 900">&lt;</b>
      </template>
      <template #title>
        <p style="font-weight: 900">确认订单</p>
      </template>
    </van-nav-bar>
    <!-- 中部 -->
    <div class="order-mid">
      <!-- 选择地址-mianban -->
      <van-action-sheet
        @select="selectAddr"
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        description="选择地址"
        close-on-click-action
      />
      <!-- 收货人地址 -->
      <div class="address">
        <div class="ren-addr" @click="show = true">
          <!-- <h3><span>姓名</span> <i>手机号</i></h3> -->
          <h3>{{ actObj.name }}</h3>
          <div class="area">
            <h4>{{ actObj.subname }}</h4>
          </div>
        </div>
        <div class="address-r">
          <van-icon name="arrow" size="1.1em" />
        </div>
      </div>
      <!-- 要购买商品 -->
      <div class="buy-shop">
        <van-tabs v-model="active">
          <van-tab title="待付款">
            <van-swipe-cell v-for="item in list" :key="item._id">
              <!-- <van-card
                :num="item.quantity"
                :price="item.product.price"
                :title="item.product.name"
                class="goods-card"
                :thumb="item.product.coverImg"
              /> -->
              <!-- 商品卡片 -->
              <van-card
                v-for="(item, index) in orderSingleItemDetails"
                :key="index"
                :num="item.quantity"
                :price="item.price"
                :title="item.product.name"
                :thumb="item.product.coverImg"
              />
              <template #right>
                <van-button
                  square
                  text="删除"
                  type="danger"
                  class="delete-button"
                  @click="del(item._id)"
                />
              </template>
            </van-swipe-cell>
            <!--  -->
          </van-tab>
          <van-tab title="待发货"
            ><van-image
              width="257"
              height="129"
              class="pic1"
              src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
            />
            <p class="p1">还没有相关订单哦!</p></van-tab
          >
          <van-tab title="待收货"
            ><van-image
              width="257"
              height="129"
              class="pic1"
              src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
            />
            <p class="p1">还没有相关订单哦!</p></van-tab
          >
          <van-tab title="待评价"
            ><van-image
              width="257"
              height="129"
              class="pic1"
              src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
            />
            <p class="p1">还没有相关订单哦!</p></van-tab
          >
          <van-tab title="售后"
            ><van-image
              width="257"
              height="129"
              class="pic1"
              src="https://s10.mogucdn.com/new1/v1/bmisc/b22401c122fbedee3b1f5d708127e9f0/194500731154.png"
            />
            <p class="p1">还没有相关订单哦!</p></van-tab
          >
        </van-tabs>
      </div>
      <!-- 商品总价 -->
      <div class="pro-info"></div>
    </div>
    <!-- 提交订单 -->
    <van-submit-bar :price="orderPrice * 100" button-text="提交订单" />
  </div>
</template>

<script>
import { adresslist, getOrderlist, getOrderItem } from "../../api/order";
// import { addorder } from "../../api/order";
// import { get } from '../../utils/request';
// import { Toast } from 'vant';
export default {
  components: {},
  data() {
    return {
      active: 0,
      list: [],
      show: false, //地址面板状态
      actions: [], // 地址信息-面板选项列表
      actObj: {}, // 回调地址
      orderid: "", // 生成订单id
      orderIdArr: [], // 订单数组
      orderSingleItem: {}, // 订单详情
      orderSingleItemDetails: [], // 订单详情中的多少个商品
      orderPrice: 0, // 此订单总价
      productListOrder: [], // 从提交的订单中获取提交的商品数组
      name: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    //   地址列表
    async getAddrList() {
      const res = await adresslist();
      let addrArr = res.data.addresses;
      //   console.log("地址列表信息", res);
      //   console.log("地址列表数组", addrArr);
      let actArr = [];
      addrArr.forEach((item) => {
        actArr.push({
          name: item.receiver + item.mobile,
          subname: item.regions,
        });
      });
      this.actions = actArr;
      this.actObj = this.actions[0];
      //   console.log("地址数据结构", this.actions);
    },
    //   订单列表
    async orderList() {
      console.log(111);
      const res = await getOrderlist({ per: 10 });
      console.log(res);
      console.log("订单列表", res.data.orders);
      let arr = [];
      res.data.orders.forEach((v, index) => {
        arr.push({ index: index, id: v._id });
      });
      this.orderIdArr = arr;
      //   console.log("订单数组", this.orderIdArr);
      this.orderid = this.orderIdArr[0].id;
      console.log("当前订单id：", this.orderid);
      this.orderItem(); //   订单详情
    },
    //   订单详情
    async orderItem() {
      const res = await getOrderItem(this.orderid);
      this.orderSingleItem = res.data;
      this.orderSingleItemDetails = res.data.details;
      this.orderPrice = res.data.order.price;
      console.log("订单详情", this.orderSingleItem);
      console.log("订单详情中的多少个商品", this.orderSingleItemDetails);
      console.log("此订单总价", this.orderPrice);
    },
    onClickLeft() {
      //   Toast("返回");
      this.$router.go(-1); // 返回上一页
    },
    // 面板回调
    selectAddr(action, index) {
      this.actObj = action;
      console.log("回调地址", this.actObj, index);
    },
  },
  created() {
    // console.log(this.$route.query);
    this.orderList(); //   订单列表
    this.getAddrList(); //地址列表
  },
  mounted() {},
};
</script>

<style scoped>
.order {
  background: rgb(244, 244, 244);
}
.order-mid {
  /* background: greenyellow; */
  /* min-height: 2rem; */
  height: 12rem;
  margin: 0.234rem 0.234rem 0;
}
.order-mid .address {
  height: 1.3rem;
  border-radius: 0.187rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.316rem 0.234rem;
}
/* 收货人地址 */
.address .ren-addr {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  /* background: coral; */
  flex-direction: column;
}
.ren-addr h3 {
  /* background: darkgray; */
  font-size: 0.328rem;
  font-weight: 900;
}
.ren-addr h3 span,
i {
  display: inline-block;
}
.ren-addr h3 i {
  margin-left: 0.328rem;
}
.ren-addr .area {
  font-size: 0.282rem;
  color: #333;
  margin-top: 0.164rem;
}
/* 购买商品 */
.order-mid .buy-shop {
  /* background: coral; */
  margin: 0.234rem 0;
}
.buy-shop .van-card {
  border-radius: 0.187rem;
  background: white;
}
/* 商品标题 */
.van-multi-ellipsis--l2 {
  font-size: 0.328rem;
}
/* 商品信息 */
.order-mid .pro-info {
  background: yellow;
  border-radius: 0.187rem;
}
</style>
