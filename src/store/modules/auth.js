import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "auth/CHANGE_INPUT";
const LOGIN = "auth/LOGIN";

export const changeInput = createAction(CHANGE_INPUT, text => text);
export const logIn = createAction(LOGIN);

const initialState = {
  register: {
    email: "",
    username: "",
    password: "",
    passwordConfirm: ""
  },
  login: {
    email: "",
    password: ""
  }
};
export default handleActions(
  {
    // 인풋 변경 리듀서
    [CHANGE_INPUT]: (state, action) => {
      produce(state, draft => {
        const { form, name, value } = action.payload;

        // 로직 변경 필요 - 코드가 너무 복잡함(상황이 여러 개)
        // 액션은 실행되지만 State가 변경되지 않는 버그 존재
        if (form === "login") {
          if (name === "email") {
            draft.login.email = value;
          } else {
            draft.login.password = value;
          }
        }

        if (form === "register") {
          if (name === "email") {
            state.register.email = value;
          } else if (name === "password") {
            draft.register.password = value;
          } else if (name === "passwordConfirm") {
            draft.register.passwordConfirm = value;
          } else if (name === "username") {
            draft.register.username = value;
          }
        }
      });
    },
    [LOGIN]: (state, action) =>
      produce(state, draft => {
        // 로그인 API를 호출해서 id와 pw 전달, serviceMode를 ture로 변경
        // id = state.auth.inputId, pw = state.auth.inputPw
      })
  },
  initialState
);
