import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

/************** STYLES **************/

const Style = styled.div``;

/************** COMPONENT **************/

const Output = () => {
  const { state } = useGlobalContext();
  const { inputNumber, result, type } = state;
  return (
    <Style>
      {!type ? <p>0</p> : <p>{type === "CONCAT" ? inputNumber : result}</p>}
    </Style>
  );
};

export default Output;
