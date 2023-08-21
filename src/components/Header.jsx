import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Theme from "./Theme";

/************** STYLES **************/

const Style = styled.header``;

/************** COMPONENT **************/

const Header = () => {
  return (
    <Style>
      <Logo />
      <Theme />
    </Style>
  );
};

export default Header;
