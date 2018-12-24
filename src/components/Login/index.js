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
import { Link } from "react-router-dom";

const Login = ({ email, password, onKeyPress, onChange, onSubmit }) => {
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
              value={email}
              name="email"
              placeholder="이메일"
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <div className="label">비밀번호</div>
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <LoginButton className="submit-btn" onClick={onSubmit}>
              로그인
            </LoginButton>
            <RightAlignedBtn>
              <Link to="/auth/register">회원가입</Link>
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
