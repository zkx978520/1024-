import { dele, get, post } from "../utils/request";

// 添加购物车
export const addToCart = (product, num = 1) =>
  post("/api/v1/shop_carts", {
    product,
    quantity: num,
  });

//   获取购物车列表
export const loadCartlist = () => get("/api/v1/shop_carts");

// 删除购物车
export const delpro=(id)=>dele('/api/v1/shop_carts/'+id)

// 删除多个购车记录
export const delpros=(ids)=>post('/api/v1/shop_carts/delmany'+ids)

