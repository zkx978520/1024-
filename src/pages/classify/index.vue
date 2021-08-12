<template>
  <div class="">
    <div class="wrap">
      <img
        class="manage"
        src="../../assets/image/left.jpg"
        alt=""
        @click="gobefore"
      />
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <!-- <input type="text" v-model="value" class="van-search" /> -->
      <img
        class="info"
        src="../../assets/image/cart.jpg"
        alt=""
        @click="gocart"
      />
    </div>
    <div class="shoplist">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div
          class="list"
          v-for="item in onSearch(value)"
          :key="item._id"
          @click="godetail(item._id)"
        >
          <img :src="item.coverImg" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="money">￥{{ item.price }}</p>
          <!-- <p class="goumai">立即购买</p> -->
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { reqProducts } from "../../api/products";
export default {
  components: {},
  data() {
    return {
      value: "",
      products: [],
      newproducts: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 商品列表
    async getproducts() {
      console.log(this.$route.params.name);
      this.loading = true; //刚开始进行数据加载
      const result = await reqProducts({
        page: this.page,
        name: this.$route.params.name,
      });
      this.loading = false; //接口调成功以后，把加载关掉
      console.log(result);
      this.products = [...this.products, ...result.data.products]; //把上一次的数据和请求过来的数据合并在一起
      // 判断，如果放回的数据小于10，说明数据已经加载完了，需要把finished关掉，设为true
      if (result.data.products.length < 10) {
        this.finished = true;
      } else {
        //如果还有数据，就需要把page+1
        this.page++;
      }
    },

    // 当滚动条滚动到下面的时候会执行onLoad
    onLoad() {
      this.getproducts();
    },

    // 搜索
    onSearch(value) {
      var newproducts = this.products.filter((item) => {
        if (item.name.includes(value)) {
          return item;
        }
      });
      return newproducts;
    },

    // 跳转到详情
    godetail(id) {
      this.$router.push("/detail/" + id);
    },
    // 跳转到上一页
    gobefore() {
      this.$router.go(-1);
    },
    // 跳转到购物车页面
    gocart() {
      this.$router.push("/cart");
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
/* wrap */
.wrap {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 54px;
  align-items: center;
  border-bottom: 2px solid #ccc;
}
.wrap .manage {
  width: 22px;
  height: 20px;
}
.wrap .van-search {
  width: 70%;
}
.wrap .info {
  width: 20px;
  height: 20px;
}
/* shoplist */
.shoplist {
  width: 100%;
  padding: 14px 10px 70px 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  flex-wrap: wrap;
  background: #f1f1f1;
}
.van-list {
  width: 100%;
}
.shoplist .list {
  width: 49%;
  display: inline-block;
  margin-top: 10px;
  font-size: 14px;
  background: #fff;
  box-sizing: border-box;
  padding: 0 0 10px 0px;
}
.shoplist .list:nth-child(even) {
  float: right;
}
.shoplist .list img {
  width: 100%;
  color: #999;
}
.shoplist .list .name {
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  margin-left: 5%;
}
.shoplist .list .money {
  font-weight: 900;
  font-size: 16px;
  margin-left: 5%;
}
.shoplist .list .goumai {
  width: 90%;
  background: rgb(255, 87, 119);
  color: #fff;
  text-align: center;
  padding: 3px 0;
  border-radius: 4px;
  margin-left: 5%;
}
</style>
