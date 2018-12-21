import styled from "styled-components";
import { Form } from "antd";

const SChatForm = styled(Form)`
  &.ant-form {
  }
`;

const SLoginForm = styled(Form)`
  &.ant-form {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
    margin: 1em;
  }

  &.login-form input {
    font-size: 1.5em;
    margin-bottom: 0.5em;
  }

  &.login-form .submit-btn {
    display: inline-block;
    padding-top: 1em;
    padding-bottom: 1em;
    padding-left: 1em;
    padding-right: 1em;
    background: #22b8cf;
    border-radius: 3px;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  &.login-form .submit-btn:hover {
    background: #3bc9db;
  }
`;

const SRegisterForm = styled(Form)`
  &.ant-form {
  }
`;

export { SChatForm, SLoginForm, SRegisterForm };
