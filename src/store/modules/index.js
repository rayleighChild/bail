import { combineReducers } from "redux";
import board from "./board";
import chat from "./chat";
import group from "./group";
import login from "./login";
import register from "./register";
import scheduler from "./scheduler";
import user from "./user";
// 임포트 리듀서

export default combineReducers({
  board,
  chat,
  group,
  login,
  register,
  scheduler,
  user
  // 추가된 리듀서
});
