<template>
  <div class="content">
    <div class="top">
      <h1>
        <img src="../../assets/image/logo.png" alt="" />
      </h1>
      <p>应用版本：14.6.1</p>
    </div>
    <div class="wrap">
      <img class="manage" src="../../assets/image/manage.png" alt="" />
      <!-- <van-search v-model="value" placeholder="请输入搜索关键词" /> -->
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <!-- <input type="text" v-model="value" class="van-search" /> -->
      <img class="info" src="../../assets/image/info.png" alt="" />
    </div>
    <div class="middle">
      <div class="midItem" v-for="item in productsfenlei" :key="item._id">
        <img :src="item.coverImg" alt="" />
        <p>{{ item.name }}</p>
      </div>
      <!-- <div class="midItem">
        <img src="../../assets/image/item.png" alt="" />
        <p>女装</p>
      </div>
      <div class="midItem">
        <img src="../../assets/image/item.png" alt="" />
        <p>女装</p>
      </div>
      <div class="midItem">
        <img src="../../assets/image/item.png" alt="" />
        <p>女装</p>
      </div>
      <div class="midItem">
        <img src="../../assets/image/item.png" alt="" />
        <p>女装</p>
      </div>
      <div class="midItem">
        <img src="../../assets/image/item.png" alt="" />
        <p>女装</p>
      </div>
      <div class="midItem">
        <img src="../../assets/image/item.png" alt="" />
        <p>女装</p>
      </div> -->
    </div>
    <div class="shoplist">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <div class="list" v-for="item in onSearch(value)" :key="item._id">
          <img :src="item.coverImg" alt="" />
          <p>{{ item.name }}</p>
          <div class="listbottom">
            <span class="money">￥{{ item.price }}</span>
            <span class="sales">销量123</span>
          </div>
        </div>
      </van-list>
    </div>
  </div>
</template>

<script>
import { reqProducts, reqProductsfenlai } from "../../api/products";
// import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      value: "", //搜索框
      products: [],
      newproducts: [],
      loading: false,
      finished: false,
      page: 1,
      productsfenlei: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 商品列表
    async getproducts() {
      this.loading = true; //刚开始进行数据加载
      const result = await reqProducts({ page: this.page });
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

    // 商品分类
    async productsfl() {
      const result = await reqProductsfenlai();
      console.log(result);
      this.productsfenlei = result.data.categories;
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
  },
  created() {
    this.productsfl();
  },
  mounted() {},
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 50px;
  overflow: hidden;
  border-bottom: 2px solid #ccc;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.top h1 {
  width: 100px;
  height: 30px;
  margin-left: 10px;
}
.top h1 img {
  width: 100%;
  height: 100%;
}
.top p {
  font-size: 14px;
  margin-left: 10px;
  margin-bottom: -6px;
  color: #999;
}

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

/* middle */
.middle {
  width: 100%;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.midItem {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
}
.midItem img {
  width: 100%;
}
.midItem p {
  margin-top: 10px;
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
.shoplist .list p {
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  margin-left: 5%;
}
.shoplist .list .listbottom {
  width: 90%;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  color: #f46;
  margin-left: 5%;
}
.shoplist .list .listbottom .sales {
  background: #ffecef;
  padding: 4px;
  border-radius: 6px;
  line-height: 1;
}
</style>
