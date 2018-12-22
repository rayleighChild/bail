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
`;

const SRegisterForm = styled(Form)`
  &.ant-form {
  }
`;

export { SChatForm, SLoginForm, SRegisterForm };
