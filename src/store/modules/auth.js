import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "auth/CHANGE_INPUT";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const LOGIN = "auth/LOGIN";
const REGISTER = "auth/REGISTER";

export const changeInput = createAction(CHANGE_INPUT); // { form, name, value }
export const initializeForm = createAction(INITIALIZE_FORM); // form
export const logIn = createAction(LOGIN);
export const register = createAction(REGISTER);

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

        // state를 직접 변경해 불변성 유지에 문제가 될 수 있지 않을까?
        // 또한, 로그인 컴포넌트 <-> 회원가입 컴포넌트 이동 시 이전 상태에는 변화가 없는 문제가 있음.
        state[form][name] = value;
      });
    },
    [LOGIN]: (state, action) =>
      produce(state, draft => {
        // 로그인 API를 호출해서 id와 pw 전달, serviceMode를 ture로 변경
        // id = state.auth.inputId, pw = state.auth.inputPw
      }),
    [REGISTER]: (state, action) =>
      produce(state, draft => {
        /* database에 email, username, password, passwordConfirm 를 전달(유효성 검사),
        정상 완료 시 serviceMode를 ture로 변경 */
        // email = register.email, password = register.password,
        // username = register.username, passwordConfirm = register.passwordConfirm
      }),
    [INITIALIZE_FORM]: (state, action) => {
      // this is for immutable
      // const initialForm = initialState.get(action.payload);
      // return state.set(action.payload, initialForm);
      produce(state, draft => {});
    }
  },
  initialState
);
