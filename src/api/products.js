import { get } from "../utils/request";

// 上拉加载更多实际上就是分页
export const reqProducts = (params) => get("/api/v1/products", params);

// 获取商品详情
export const reqProductsDetail = (id) => get("/api/v1/products/" + id);

// 商品分类
export const reqProductsfenlai = () => get("/api/v1/product_categories");
