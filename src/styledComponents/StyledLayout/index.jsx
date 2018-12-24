import styled from "styled-components";
import oc from "open-color";

import { Layout } from "antd";
import { shadow } from "../../lib/styleUtil";

const { Sider } = Layout;

const AppLayout = styled(Layout)`
  &.ant-layout {
    width: 100%;
    height: 100%;
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .social-login {
    margin: 0;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
  }
`;

const LMLayout = styled(Layout)`
  & {
    width: 100%;
    height: 100%;
    .login-form-wrapper {
    }
  }
`;

const MLayout = styled(Layout)``;

const MSider = styled(Sider)`
  &.ant-layout {
  }
`;

const ShadowedBox = styled(Layout)`
  width: 500px;
  ${shadow(2)}
  .logo-wrapper {
    background: ${oc.teal[7]};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo-wrapper a {
    color: white;
    font-family: "Rajdhani";
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
  }

  .content-wrapper {
    background: white;
    padding: 2rem;
    height: auto;

    .title {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${oc.gray[8]};
      margin-bottom: 1rem;
    }
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
  LMLayout,
  MLayout,
  MSider,
  ShadowedBox,
  ULayout,
  USider
};
