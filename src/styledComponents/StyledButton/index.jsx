import styled from "styled-components";
import oc from "open-color";
import { shadow } from "../../lib/styleUtil";
import { Button } from "antd";

const BorderedButton = styled(Button)`
  font-weight: 600;
  color: ${oc.cyan[6]};
  border: 1px solid ${oc.cyan[6]};
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s all;

  &:hover {
    background: ${oc.cyan[6]};
    color: white;
    ${shadow(1)}
  }

  &:active {
    /* 마우스 클릭시 아래로 미세하게 움직임 */
    transform: translateY(3px);
  }
`;

const RoundedBtn = styled(Button)`
  &.ant-btn {
    border-radius: 4px;
  }
`;

const BoardBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

const LoginButton = styled(BorderedButton)`
  .submit-btn {
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
`;

const SendBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

const SocialLoginBtn = styled(BorderedButton)`
  &.ant-btn {
    margin-bottom: 1em;
    width: 25em;
    height: 4em;
  }
`;

const TodoBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

export { BoardBtn, LoginButton, SendBtn, SocialLoginBtn, TodoBtn };
