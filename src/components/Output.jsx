import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

/************** STYLES **************/

const Style = styled.div`
  text-align: right;
`;

/************** COMPONENT **************/

const Output = () => {
  const { state } = useGlobalContext();
  const { inputNumber, result, type } = state;
  return (
    <Style>
      <p>{type === "INPUT" ? inputNumber : result}</p>
    </Style>
  );
};

export default Output;
