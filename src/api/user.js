import { post, get } from "../utils/request";

// 二次封装注册
export const regApi = (user) => post("/api/v1/auth/reg", user);

// 封装登录
export const loginApi = (user) => post("/api/v1/auth/login", user);

// 获取用户信息
export const userInfoApi = () => get("/api/v1/users/info");

// 修改密码
export const changePwdApi = (oldPassword, password) =>
  post("/api/v1/users/change_pwd", {
    oldPassword,
    password,
  });

// 修改个人信息
export const changeInfoApi = (nickName, avatar) =>
  post("/api/v1/users/change_info", {
    nickName,
    avatar,
  });
