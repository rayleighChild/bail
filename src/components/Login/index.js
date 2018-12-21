import React from "react";
import {
  FbIcon,
  GoogleIcon,
  GithubIcon,
  LLayout,
  SLoginForm,
  SocialBtn
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
        <div className="submit-btn" onClick={onSubmit}>
          로그인
        </div>
      </SLoginForm>
      <div className="social-login">
        <SocialBtn>
          <FbIcon /> 페이스북 로그인
        </SocialBtn>
        <SocialBtn>
          <GoogleIcon /> 구글 로그인
        </SocialBtn>
        <SocialBtn>
          <GithubIcon /> 깃헙 로그인
        </SocialBtn>
      </div>
    </LLayout>
  );
};

export default Login;
