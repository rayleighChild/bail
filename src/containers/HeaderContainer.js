import React, { Component } from "react";
import { connect } from "react-redux";

import { Header } from "../components";
import { LoginButton } from "../styledComponents";

class HeaderContainer extends Component {
  render() {
    const { visible } = this.props;
    if (!visible) return null;

    return (
      <Header>
        <LoginButton to="/auth/login">Login/Register</LoginButton>
      </Header>
    );
  }
}
const mapStateToProps = ({ base }) => ({
  visible: base.visible
});

// 이런 구조로 하면 나중에 다양한 리덕스 모듈을 적용해야 하는 상황에서 유용합니다.
const mapDispatchToProps = dispatch => ({
  // AnotherActions: bindActionCreators(anotherActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
