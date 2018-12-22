import React from "react";
import {
  SFbIcon,
  SGoogleIcon,
  SGithubIcon,
  LLayout,
  ShadowedBox,
  SLoginForm,
  SocialLoginBtn,
  LoginButton
} from "../../styledComponents";

const Login = ({
  inputId,
  inputPw,
  onKeyPress,
  onIdChange,
  onPwChange,
  onSubmit
}) => {
  return (
    <LLayout>
      <ShadowedBox>
        <div className="logo-wrapper">
          <a href="/">Bail</a>
        </div>
        <div className="content-wrapper">
          <SLoginForm className="login-form">
            <input
              type="text"
              value={inputId}
              onChange={onIdChange}
              onKeyPress={onKeyPress}
            />
            <input
              type="password"
              value={inputPw}
              onChange={onPwChange}
              onKeyPress={onKeyPress}
            />
            <LoginButton className="submit-btn" onClick={onSubmit}>
              로그인
            </LoginButton>
          </SLoginForm>
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
