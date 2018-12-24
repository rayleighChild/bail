import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Register } from "../components";
import * as authActions from "../store/modules/auth";
import * as baseActions from "../store/modules/base";

class FormContainer extends Component {
  // 페이지에 진입 할 때 헤더를 비활성화
  componentWillMount() {
    this.props.BaseActions.setHeaderVisibility(false);
  }

  // 페이지에서 벗어 날 때 다시 활성화
  componentWillUnmount() {
    this.props.BaseActions.setHeaderVisibility(true);
  }

  // 입력 값에 따라 상태 변경
  handleChange = e => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: "register"
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
    const { email, password, username, passwordConfirm } = this.props;
    return (
      <Register
        email={email}
        password={password}
        username={username}
        passwordConfirm={passwordConfirm}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  email: auth.email,
  password: auth.password,
  username: auth.username,
  passwordConfirm: auth.passwordConfirm
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
)(FormContainer);
