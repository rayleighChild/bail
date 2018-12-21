import styled from "styled-components";
import { Layout } from "antd";

const { Sider } = Layout;

const AppLayout = styled(Layout)`
  &.ant-layout {
    height: 796px;
  }
`;

const GLayout = styled(Layout)`
  &.ant-layout {
  }
`;

const GSider = styled(Sider)`
  &.ant-layout {
  }
`;

const LLayout = styled(Layout)`
  &.ant-layout {
    border: 1px solid black;
    width: 50%;
    height: 100%;
  }
  .social-login {
    margin: 0 auto;
    width: calc(50% - 100px);
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
  }
`;

const MLayout = styled(Layout)`
  &.ant-layout {
  }
`;

const MSider = styled(Sider)`
  &.ant-layout {
  }
`;

const ULayout = styled(Layout)`
  &.ant-layout {
  }
`;

const USider = styled(Sider)`
  &.ant-layout {
  }
`;

export {
  AppLayout,
  GLayout,
  GSider,
  LLayout,
  MLayout,
  MSider,
  ULayout,
  USider
};
