import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

/************** STYLES **************/

const Style = styled.section`
  text-align: right;
  background-color: hsl(223, 31%, 20%);
  color: white;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 1.5rem 0;
  width: 30rem;

  p {
    margin: 0;
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
