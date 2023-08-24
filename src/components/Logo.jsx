import React from "react";
import styled from "styled-components";

/************** STYLES **************/

const Style = styled.div`
  h1 {
    margin: 0;
    font-size: 3rem;
  }
`;

/************** COMPONENT **************/

const Logo = () => {
  return (
    <Style>
      <h1>calc</h1>
    </Style>
  );
};

export default Logo;
