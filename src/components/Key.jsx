import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

/************** STYLES ***************/

const Style = styled.button`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background-color: ${(props) => props.theme.keyBackground};
  border-bottom: 5px solid ${(props) => props.theme.keyShadow};
  color: ${(props) => props.theme.keyText};
  cursor: pointer;
`;

/************** COMPONENT **************/

const Key = ({ id, value, action }) => {
  const { state, dispatch } = useGlobalContext();

  const handleClick = () => {
    dispatch({ type: action, payload: value });
  };

  return (
    <Style onClick={handleClick} id={id ? id : value}>
      {value}
    </Style>
  );
};

export default Key;
