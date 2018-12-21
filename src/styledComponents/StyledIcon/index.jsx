import * as React from "react";
import styled from "styled-components";
import { Icon, Spin } from "antd";

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
});

const GithubIcon = <IconFont type="icon-github" />;
const GoogleIcon = <IconFont type="icon-google" />;
const FbIcon = <IconFont type="icon-facebook" />;

// const GithubIcon = () => <Icon type="github" />;
// const GoogleIcon = () => <Icon type="google" />;
// const FbIcon = () => <Icon type="facebook" />;

const SLoading = <Icon type="loading" />;
const SSpin = styled(Spin)`
  ant-spin {
  }
`;

export { FbIcon, GithubIcon, GoogleIcon, SLoading, SSpin };
