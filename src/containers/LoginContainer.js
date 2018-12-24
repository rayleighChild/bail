import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Login } from "../components";
import * as authActions from "../store/modules/auth";
import * as baseActions from "../store/modules/base";

class LoginContainer extends Component {

  // 입력 값에 따라 상태 변경
  handleChange = e => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: "login"
    });
  };

  // 아이디와 비밀번호의 상태로 로그인
  handleSubmit = () => {
    const { AuthActions } = this.props;

    AuthActions.logIn();

    // 인풋 비우기
    AuthActions.changeInput("");
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      console.log(e);
      // Id 폼에서는 커서를 Pw 폼으로 이동, Pw 폼에서는 this.handleSubmit(e) 실행
    }
  };

  render() {
    const { email, password } = this.props;
    console.log(email);
    return (
      <Login
        email={email}
        password={password}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  AuthActions: bindActionCreators(authActions, dispatch),
  BaseActions: bindActionCreators(baseActions, dispatch)
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
