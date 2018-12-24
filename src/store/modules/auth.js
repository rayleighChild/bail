import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT_ID = "auth/CHANGE_INPUT_ID";
const CHANGE_INPUT_PW = "auth/CHANGE_INPUT_PW";
const LOGIN = "auth/LOGIN";

export const changeInputId = createAction(CHANGE_INPUT_ID, text => text);
export const changeInputPw = createAction(CHANGE_INPUT_PW, text => text);
export const logIn = createAction(LOGIN);

const initialState = {
  inputId: "",
  inputPw: ""
};

export default handleActions(
  {
    [CHANGE_INPUT_ID]: (state, action) =>
      produce(state, draft => {
        draft.inputId = action.payload;
      }),
    [CHANGE_INPUT_PW]: (state, action) =>
      produce(state, draft => {
        draft.inputPw = action.payload;
      }),
    [LOGIN]: (state, action) =>
      produce(state, draft => {
        // 로그인 API를 호출해서 id와 pw 전달, serviceMode를 ture로 변경
        // id = state.auth.inputId, pw = state.auth.inputPw
      })
  },
  initialState
);
