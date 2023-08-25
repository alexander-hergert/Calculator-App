import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

/************** STYLES **************/

const Style = styled.section`
  text-align: right;
  background-color: ${(props) => props.theme.screenBackground};
  color: ${(props) => props.theme.outputText};
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  width: 30rem;

  p {
    margin: 0;
    font-size: 2.75rem;
  }
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
