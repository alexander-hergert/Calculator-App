import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

/************** STYLES ***************/

const Style = styled.button`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: hsl(30, 25%, 89%);
  border-bottom: 5px solid hsl(28, 16%, 65%);
  color: hsl(224, 36%, 15%);
  width: 6rem;
`;

/************** COMPONENT **************/

const Key = ({ value, action }) => {
  const { state, dispatch } = useGlobalContext();
  let buttonColors = {};
  const handleClick = () => {
    dispatch({ type: action, payload: value });
  };

  if (value === "DEL") {
  }

  return <Style onClick={handleClick}>{value}</Style>;
};

export default Key;
