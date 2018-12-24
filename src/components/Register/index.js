import React from "react";
import {
  LLayout,
  RightAlignedBtn,
  ShadowedBox,
  SInfoInputForm,
  LoginButton
} from "../../styledComponents";
import { Link } from "react-router-dom";

const Register = ({
  email,
  password,
  username,
  passwordConfirm,
  onKeyPress,
  onChange,
  onSubmit
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
              value={email}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <div className="label">닉네임</div>
            <input
              name="username"
              placeholder="닉네임"
              value={username}
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
            <div className="label">비밀번호 확인</div>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
            <LoginButton className="submit-btn" onClick={onSubmit}>
              회원가입
            </LoginButton>
            <RightAlignedBtn>
              <Link to="/">로그인</Link>
            </RightAlignedBtn>
          </SInfoInputForm>
        </div>
      </ShadowedBox>
    </LLayout>
  );
};

export default Register;
