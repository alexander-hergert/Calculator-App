import React from "react";
import Key from "./Key";
import styled from "styled-components";
import { data } from "../data";

/************** STYLES **************/

const Style = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

/************** COMPONENT **************/

const Keyboard = () => {
  return (
    <Style>
      {data.map((key) => (
        <Key key={key.value} {...key} />
      ))}
    </Style>
  );
};

export default Keyboard;
