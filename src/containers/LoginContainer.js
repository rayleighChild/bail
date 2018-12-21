import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as authActions from "../store/modules/auth";
import { Login } from "../components";

class FormContainer extends Component {
  // 입력 값에 따라 아이디 상태 변경
  handleIdChange = e => {
    const { AuthActions } = this.props;
    AuthActions.changeInputId(e.target.value);
  };

  // 입력 값에 따라 비밀번호 상태 변경
  handlePwChange = e => {
    const { AuthActions } = this.props;
    AuthActions.changeInputPw(e.target.value);
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
      <Login
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
  AuthActions: bindActionCreators(authActions, dispatch)
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
