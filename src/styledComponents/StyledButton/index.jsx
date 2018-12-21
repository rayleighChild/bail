import styled from "styled-components";
import { Button } from "antd";

const RoundedBtn = styled(Button)`
  &.ant-btn {
    border-radius: 4px;
  }
`;

const BoardBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

const SendBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

const SocialBtn = styled(RoundedBtn)`
  &.ant-btn {
    display: block;
    margin: 10px;
    width: 100%;
    height: 100%;
  }
`;

const TodoBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

export { BoardBtn, SendBtn, SocialBtn, TodoBtn };
