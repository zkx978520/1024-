import { post,get ,dele,put} from "../utils/request";

// 提交订单
export const addorder=(data)=>post('/api/v1/orders',data)

// 获取订单列表
export const orderList=()=>get('/api/v1/orders')

// 根据 id 获取订单详情
export const orderDet=(id)=>get('/api/v1/orders/'+id)

// 根据 id 删除订单详情
export const delOrder=(id)=>dele('/api/v1/orders/'+id)

// 删除多个订单
export const delOrderS=(ids)=>post('/api/v1/orders/'+ids)

// 收货地址列表
export const adressList=()=>get('/api/v1/addresses')

// 获取单条收货地址
export const adress=(id)=>get('/api/v1/addresses/'+id)

// 收货地址新增
export const addAdress=(data)=>post('/api/v1/addresses/',data)

// 收货地址修改
export const addAdress=(id,data)=>put('/api/v1/addresses/'+id,data)

// 收货地址删除
export const addAdress=(id)=>post('/api/v1/addresses/'+id)