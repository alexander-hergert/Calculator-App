import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import Theme from "./Theme";

/************** STYLES **************/

const Style = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
