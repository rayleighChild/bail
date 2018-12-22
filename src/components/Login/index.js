import React from "react";
import {
  LLayout,
  RightAlignedBtn,
  SFbIcon,
  SGoogleIcon,
  SGithubIcon,
  ShadowedBox,
  SInfoInputForm,
  SocialLoginBtn,
  LoginButton
} from "../../styledComponents";

const Login = ({
  inputId,
  inputPw,
  onKeyPress,
  onIdChange,
  onPwChange,
  onSubmit,
  onMoveReg
}) => {
  return (
    <LLayout>
      <ShadowedBox>
        <div className="logo-wrapper">
          <a href="/">Bail</a>
        </div>
        <div className="content-wrapper">
          <div className="title">로그인</div>
          <SInfoInputForm className="login-form">
            <div className="label">이메일</div>
            <input
              type="text"
              value={inputId}
              name="email"
              placeholder="이메일"
              onChange={onIdChange}
              onKeyPress={onKeyPress}
            />
            <div className="label">비밀번호</div>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={inputPw}
              onChange={onPwChange}
              onKeyPress={onKeyPress}
            />
            <LoginButton className="submit-btn" onClick={onSubmit}>
              로그인
            </LoginButton>
            <RightAlignedBtn onClick={onMoveReg}>
              <a href="/">회원가입</a>
            </RightAlignedBtn>
          </SInfoInputForm>
          <div className="social-login">
            <SocialLoginBtn>
              <SFbIcon /> 페이스북 로그인
            </SocialLoginBtn>
            <SocialLoginBtn>
              <SGoogleIcon /> 구글 로그인
            </SocialLoginBtn>
            <SocialLoginBtn>
              <SGithubIcon /> 깃헙 로그인
            </SocialLoginBtn>
          </div>
        </div>
      </ShadowedBox>
    </LLayout>
  );
};

export default Login;
