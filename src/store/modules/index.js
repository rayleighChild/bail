import { combineReducers } from "redux";
import base from "./base";
import board from "./board";
import chat from "./chat";
import group from "./group";
import auth from "./auth";
import scheduler from "./scheduler";
import user from "./user";
// 임포트 리듀서

export default combineReducers({
  base,
  board,
  chat,
  group,
  auth,
  scheduler,
  user
  // 추가된 리듀서
});
