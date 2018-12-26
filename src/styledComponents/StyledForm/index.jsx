import styled from "styled-components";
import oc from "open-color";

import { Form } from "antd";

const SChatForm = styled(Form)`
  &.ant-form {
  }
`;

const SInfoInputForm = styled(Form)`
  &.ant-form {
    & + & {
      margin-top: 1rem;
    }
  }

  &.login-form input {
    width: 100%;
    border: 1px solid ${oc.gray[3]};
    outline: none;
    border-radius: 0px;
    line-height: 2.5rem;
    font-size: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const SRegisterForm = styled(Form)`
  &.ant-form {
  }
`;

export { SChatForm, SInfoInputForm, SRegisterForm };
