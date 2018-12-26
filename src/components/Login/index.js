import React from "react";
import {
  LLayout,
  RightAlignedBtn,
  SFbIcon,
  SGoogleIcon,
  SGithubIcon,
  ShadowedBox,
  SLabel,
  SInfoInputForm,
  SocialLoginBtn,
  LoginButton
} from "../../styledComponents";
import { Link } from "react-router-dom";
import { HomeInfo } from "..";

const Login = ({ email, password, onKeyPress, onChange, onSubmit }) => {
  // 적절한 사이즈일 때 true, 아니면 false
  const properSize = true;

  return (
    <LLayout>
      {properSize ? <HomeInfo /> : ""}
      <ShadowedBox>
        <div className="logo-wrapper">
          <Link to="/">Bail</Link>
        </div>
        <div className="content-wrapper">
          <div className="title">로그인</div>
          <SInfoInputForm className="login-form">
            <SLabel>이메일</SLabel>
            <input
              type="text"
              value={email}
              name="email"
              placeholder="이메일"
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <SLabel>비밀번호</SLabel>
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
