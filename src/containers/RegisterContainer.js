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

  handleIdChange = e => {
    const { AuthActions } = this.props;
    AuthActions.changeInputId(e.target.value);
  };

  handleUserNameChange = e => {
    const { AuthActions } = this.props;
    AuthActions.changeInputUserName(e.target.value);
  };

  handlePwChange = e => {
    const { AuthActions } = this.props;
    AuthActions.changeInputPw(e.target.value);
  };

  handlePwConfirmChange = e => {
    const { AuthActions } = this.props;
    AuthActions.changeInputPwConfirm(e.target.value);
  };

  // 아이디와 비밀번호의 상태로 로그인
  handleSubmit = () => {
    const { AuthActions } = this.props;

    AuthActions.logIn();

    // 비우기
    AuthActions.changeInputId("");
    AuthActions.changeInputPw("");
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      console.log(e);
      // Id 폼에서는 커서를 Pw 폼으로 이동, Pw 폼에서는 this.handleSubmit(e) 실행
    }
  };

  render() {
    const { inputId, inputPw } = this.props;
    return (
      <Register
        inputId={inputId}
        inputPw={inputPw}
        onKeyPress={this.handleKeyPress}
        onIdChange={this.handleIdChange}
        onPwChange={this.handlePwChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  inputId: auth.inputId,
  inputPw: auth.inputPw
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
