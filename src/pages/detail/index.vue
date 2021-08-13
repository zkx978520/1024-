<template>
  <div class='detail'>
        <!-- 右上跳转 -->
        <div class="jump">
            <div class="jumpHome jumpsame" @click="gohome">
                <span class="iconfont icon-shouye-black"></span>
            </div>
            <div class="jumpCart jumpsame" @click="gocart">
                <span class="iconfont icon-cart1"></span>
            </div>
        </div>
        <!-- 轮播 -->
        <van-swipe class="my-swipe" indicator-color="white">
            <van-swipe-item>
                <img :src="obj.coverImg" alt="">
            </van-swipe-item>
                 <van-swipe-item>
                <img :src="obj.coverImg" alt="">
            </van-swipe-item>
                 <van-swipe-item>
                <img :src="obj.coverImg" alt="">
            </van-swipe-item>
                 <van-swipe-item>
                <img :src="obj.coverImg" alt="">
            </van-swipe-item>
        </van-swipe>
        <!-- 分割线 -->
        <van-divider
        :style="{ color: '#1989fa', borderColor: '#999', paddingLeft: '16px' }"
        ></van-divider>
        <!-- 商品信息 -->
        <div class="goodsInform">
            <div class="goodsprice"> 
                <p>￥<span>{{obj.price}}</span>起</p>
                <p class="yishou">已售888</p>
            </div>
            <!-- 优惠券 -->
            <div class="youhuiquan">
                <div class="youhui" @click="show=true">
                    <p class="p1">新人券满6减5</p>
                    <p class="p2">领券&nbsp;&nbsp;<span class="iconfont icon-next"></span></p>
                </div>
                <!-- <van-action-sheet v-model="show" title="优惠券">
                    <div class="content">
                    </div>
                </van-action-sheet> -->
            </div>
            <!-- 商品名称 -->
            <div class="goodsName">
                <p class="p1">{{obj.name}}</p>
                <p class="p2"><span class="iconfont icon-ren1"></span>帮我选</p>
            </div>
        </div>
        <!-- 空白条区 -->
        <div class="Blackf9"></div>
        <!-- 选颜色尺码 -->
        <div class="addCart">
        <!--  选择商品数量-->
            <div class="chooseNum" @click="show=true">
                <p class="p1">选择&nbsp;&nbsp;<span>尺码&nbsp;颜色</span></p>
                <p class="iconfont icon-next"></p>
            </div>
            <!-- 免邮费 -->
            <div class="freeYou" @click="show=true">
                <p>免邮费</p>
            </div>
            <!-- fuwu -->
            <div class="service" @click="show=true">
                <p class="p1">服务&nbsp;&nbsp;<span>72小时发货&nbsp;|&nbsp;7天无理由退货&nbsp;|&nbsp;延误必赔</span></p>
                <!-- <p class="p2">></p> -->
                <p class="iconfont icon-next"></p>
            </div>
        </div> 
        <!-- 底部 -->
        <div class="bottom">
            <van-goods-action>
                <van-goods-action-icon icon="chat-o" text="客服" />
                <van-goods-action-icon icon="cart-o" text="购物车" />
                <van-goods-action-icon icon="star" text="已收藏" color="#ff5000"/>
                <van-goods-action-button type="warning" text="加入购物车"  @click="show=true"/>
                <van-goods-action-button type="danger" text="立即购买"  @click="show=true"/>
            </van-goods-action>
        </div>  
        <!-- 弹出组件 -->
        <div class="tanchu">
            <van-action-sheet v-model="show" >
                <div class="content">
                    <div class="top">
                        <img :src="obj.coverImg" alt="">
                        
                        <div class="showPrice">
                            <div class="tancx">
                                <p>￥{{obj.price}}</p>
                                <p>库存：9999</p>
                                <p>已选：豪华配置</p>
                            </div>
                            
                            <p @click="show=false">X</p>
                        </div>
                    </div>
                    <div class="addNum">
                        <p>选择数量</p>
                        <van-stepper v-model="value" integer />
                    </div>
                    <van-button 
                    class="btn" 
                    type="primary"
                     color="#ff537c" 
                     block 
                     @click="addCart"
                     >确&nbsp;定</van-button>
                    
                </div>
            </van-action-sheet>
        </div>

  </div>
</template>

<script>
import {get,post} from "../../utils/request"
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      id:'',
      obj:"",
      show:false,
      value:"",
    };
  },
  computed: {
    
  },
  watch: {},

  methods: {

    //init初始化
        async init(id){
            const result=await get("/api/v1/products/"+id)
            console.log(result);
            this.obj=result.data

        },

        async addCart(){
            let token=localStorage.getItem("token")
            console.log(token);
        if (token==null) {
            this.$router.push("/login")
        }else{
            const result=await post("/api/v1/shop_carts",
           {product :this.id,
            quantity:this.value })
            console.log(result);
            if (result.data.code==="success") {
                Toast.success('成功加入购物车');
                this.show=false
            }
        }
        },

        // async addCart(){
        // //    Toast.success('成功加入购物车');
        // //    this.show=false
        //    const result=await post("/api/v1/shop_carts",
        //    {product :this.id,
        //     quantity:this.value })
        //     console.log(result);
        //     if (result.data.code==="success") {
        //         Toast.success('成功加入购物车');
        //         this.show=false
        //     }
        // },
        // 跳转到home
        gohome(){
            this.$router.push("/home")
        },
        gocart(){
            this.$router.push("/cart")
        },
  },
  created() {
     this.id=this.$route.params.id;//获取传过来的id
     this.init(this.id);
  },
  mounted() {},
};
</script>
<style scoped>
/* 跳转图标 */
.jump{
    width: 40px;
    height: 100px;
    /* background: red; */
    position: absolute;
    right: 6px;
    margin-top: 9px;
    z-index: 9;
    font-size: .32rem;
}
.jump .jumpsame{
    width: 40px;
    height: 40px;
    background: rgba(0,0,0,.3);
    /* background-color: violet; */
    border-radius: 50%;
    margin-top: 10px;
    line-height: 40px;
    text-align: center;
    color:#fff
}
.jump .jumpsame span{
     font-size:20px;
}
/* 轮播 */
  .my-swipe .van-swipe-item {
    text-align: center;
    /* background-color: #39a9ed; */
  }
  .my-swipe img{
      width: 100%;
  }
  /* 商品信息 */
  .goodsInform{
      margin: 10px 16px 5px 12px;
      /* background-color: aquamarine; */
  }
  .goodsInform .goodsprice{
    margin-bottom: 5px;
    /* background-color:bisque; */
    font-size: 12px;
    color: #333;
    display: flex;
    justify-content: space-between;
  }
  .goodsInform .goodsprice p>span{
    font-size: 24px;
    color: #333;
    font-weight: bolder;
  }
   .goodsInform .goodsprice .yishou{
    font-size: 14px;
    color: #666;
    line-height: 24px;
  }
  /* 优惠券 */
  .youhuiquan .youhui{
      height: 34px;
      /* background-color: cornflowerblue; */
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .youhuiquan .youhui .p1{
      color:#fff;
      font-size: 12px;
      background:#ff537c ;
      line-height: 16px;

  }
  .youhuiquan .youhui .p2{
       font-size: 14px;
       color: #ff537c;
  }
  /* .youhuiquan .youhui 
.content {
    padding: 16px 16px 160px;
  } */
  /* 商品名称 */
  .goodsName {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* background-color:greenyellow; */
      margin-bottom: 10px;
  }
  .goodsName .p1{
      width: 273px;
      font-size: 16px;
      line-height: 22px;
       /* background-color:rgb(234, 255, 47); */
  }
  .goodsName .p2{
      width: 78px;
       background-color:#f8f8f8;
       color: #999;
       font-size: 12px;
       padding-left: 20px;
       line-height: 24px;
  }
  /* 空白条区 */
  .Blackf9{
      background-color: #f9f9f9;
      height: 9px;
  }
  /* 选择颜色尺码 */
.addCart{
     margin: 10px 16px 50px 12px;
}
  .addCart .chooseNum{
      height: 34px;
      /* background-color: cornflowerblue; */
      display: flex;
      justify-content: space-between;
      align-items: center;
  } 
  .addCart .chooseNum p{
      color:#999;
      font-size: 14px;
      /* background:#ff537c ; */
      line-height: 16px;
  }
  .addCart .chooseNum .p1 span {
      color:#333;
      font-size: 14px;
  }
  .addCart .service{
      height: 34px;
      /* background-color: rgb(100, 205, 237); */
      display: flex;
      justify-content: space-between;
      align-items: center;
  } 
  .addCart .service p{
      color:#999;
      font-size: 14px;
      /* background:#ff537c ; */
      line-height: 16px;
  }
  .addCart .service .p1 span {
      color:#333;
      font-size: 14px;
  }
   .addCart .freeYou{
      height: 34px;
      /* background-color: rgb(158, 252, 158); */
  } 
  .addCart .freeYou p{
      color:#999;
      font-size: 14px;
      line-height: 34px;
  }

  /* 弹出框 */
  .content {
    padding: 16px 16px 160px;
  }
  .content .top img{
      width: 90px;
  }
  .content .top{
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
  }
    .content .top .showPrice{
      width: 240px;
      display: flex;
      justify-content: space-between;
      /* align-items: center; */
  }
  .content .top .showPrice p{
      line-height: 20px;
  }
  /* 添加购物车数量 */
.content .addNum{
    margin-top: 14px;
}
.content .addNum p{
    margin-bottom: 14px;
}
.content .btn{
font-size: 24px;
position: absolute;
left: 0;
bottom: 0;
}</style>
