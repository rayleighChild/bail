import styled from "styled-components";
import { Button } from "antd";

const RoundedBtn = styled(Button)`
  &.ant-btn {
    border-radius: 4px;
  }
`;

const SendBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

const BoardBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

const TodoBtn = styled(RoundedBtn)`
  &.ant-btn {
  }
`;

export { SendBtn, BoardBtn, TodoBtn };
