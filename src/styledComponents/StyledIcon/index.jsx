import * as React from "react";
import styled from "styled-components";
import { Icon, Spin } from "antd";

// const IconFont = Icon.createFromIconfontCN({
//   scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
// });

const GithubIcon = () => <Icon type="github" />;
const SGithubIcon = styled(GithubIcon)``;

const GoogleIcon = () => <Icon type="google" />;
const SGoogleIcon = styled(GoogleIcon)``;

const FbIcon = () => <Icon type="facebook" />;
const SFbIcon = styled(FbIcon)``;

const SLoading = <Icon type="loading" />;
const SSpin = styled(Spin)`
  ant-spin {
  }
`;

export { SFbIcon, SGithubIcon, SGoogleIcon, SLoading, SSpin };
