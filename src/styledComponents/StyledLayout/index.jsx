import styled from "styled-components";
import oc from "open-color";

import { Layout } from "antd";
import { shadow } from "../../lib/styleUtil";

const { Sider } = Layout;

const AppLayout = styled(Layout)`
  & {
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

const HLayout = styled(Layout)`
  & {
    width: 100%;
    height: 100%;
  }
`;

const InfoLayout = styled(Layout)`
  & {
    width: calc(60% - 2rem);
    font-family: sans-serif;

    .HomeLogo {
      width: 100%;
      height: 10rem;
      text-align: center;
      font-size: 7rem;
    }

    .HomeContent {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
    }
  }
`;

const LLayout = styled(Layout)`
  & {
    padding-top: 7%;
    display: flex;
    justify-content: center;
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
  & {
    width: 35%;
    margin-right: 10%;
    ${shadow(2)}
  }

  .logo-wrapper {
    background: ${oc.cyan[7]};
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

const SLabel = styled.div`
  & {
    font-size: 0.8rem;
    color: ${oc.gray[6]};
    margin-top: 0.25rem;
    margin-bottom: 0.1rem;
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
  HLayout,
  InfoLayout,
  LLayout,
  LMLayout,
  MLayout,
  MSider,
  ShadowedBox,
  SLabel,
  ULayout,
  USider
};
