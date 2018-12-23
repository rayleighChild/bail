import React from "react";
import {
  LLayout,
  RightAlignedBtn,
  ShadowedBox,
  SInfoInputForm,
  LoginButton
} from "../../styledComponents";

const Register = ({
  inputId,
  inputPw,
  inputUserName,
  inputPwConfirm,
  onKeyPress,
  onIdChange,
  onUserNameChange,
  onPwChange,
  onPwConfirmChange,
  onSubmit,
  onMoveLogin
}) => {
  return (
    <LLayout>
      <ShadowedBox>
        <div className="logo-wrapper">
          <a href="/">Bail</a>
        </div>
        <div className="content-wrapper">
          <div className="title">회원가입</div>
          <SInfoInputForm className="login-form">
            <div className="label">이메일</div>
            <input
              name="email"
              placeholder="이메일"
              value={inputId}
              onChange={onIdChange}
              onKeyPress={onKeyPress}
            />
            <div className="label">아이디</div>
            <input
              name="username"
              placeholder="아이디"
              value={inputUserName}
              onChange={onUserNameChange}
              onKeyPress={onKeyPress}
            />
            <div className="label">비밀번호</div>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호"
              value={inputPw}
              onChange={onPwChange}
              onKeyPress={onKeyPress}
            />
            <div className="label">비밀번호 확인</div>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              value={inputPwConfirm}
              onChange={onPwConfirmChange}
              onKeyPress={onKeyPress}
            />
            <LoginButton className="submit-btn" onClick={onSubmit}>
              <a href="/">로그인</a>
            </LoginButton>
            <RightAlignedBtn onClick={onMoveLogin}>로그인</RightAlignedBtn>
          </SInfoInputForm>
        </div>
      </ShadowedBox>
    </LLayout>
  );
};

export default Register;
