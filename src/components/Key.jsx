import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

/************** STYLES ***************/

const Style = styled.button`
  padding: 1rem;
`;

/************** COMPONENT **************/

const Key = ({ value, action }) => {
  const { state, dispatch } = useGlobalContext();

  const handleClick = () => {
    dispatch({ type: action, payload: value });
  };

  return <Style onClick={handleClick}>{value}</Style>;
};

export default Key;
