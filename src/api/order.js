import { post, get, dele,put } from "../utils/request";

// 提交订单
export const addorder = (data) => post("/api/v1/orders", data);

// 获取订单列表
export const orderList = () => get("/api/v1/orders");

// 根据 id 获取订单详情
export const orderDet = (id) => get("/api/v1/orders/" + id);

// 根据 id 删除订单详情
export const delOrder = (id) => dele("/api/v1/orders/" + id);

// 删除多个订单
export const delOrderS = (ids) => post("/api/v1/orders/" + ids);

// 收货地址新增
export const addadress=(data)=>post('/api/v1/addresses',data)

// 收货地址列表
export const adresslist=()=>get('/api/v1/addresses')

// 根据id获取单条收货地址
export const adressload=(id)=>get('/api/v1/addresses/'+id)

// 修改收货地址
export const updateadress=(id,data)=>put('/api/v1/addresses/'+id,data)

// 删除收货地址
export const deladress=(id)=>dele('/api/v1/addresses/'+id)
