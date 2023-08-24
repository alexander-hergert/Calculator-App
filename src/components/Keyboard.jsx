import React, { useEffect } from "react";
import Key from "./Key";
import styled from "styled-components";
import { data } from "../data";
import { useGlobalContext } from "../context";

/************** STYLES **************/

const Style = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 1.5rem;
  gap: 1rem;
  background-color: ${(props) => props.theme.toggleKeypadBackground};
  border-radius: 10px;
  width: 30rem;

  //style buttons here

  #delete,
  #reset,
  #result {
    color: white;
  }

  #delete {
    background-color: ${(props) => props.theme.keyBackgroundReset};
    border-bottom: 5px solid ${(props) => props.theme.keyShadowReset};
  }

  #reset {
    background-color: ${(props) => props.theme.keyBackgroundReset};
    border-bottom: 5px solid ${(props) => props.theme.keyShadowReset};
    grid-area: 5 / 1 / 5 / 3;
  }

  #result {
    background-color: ${(props) => props.theme.keyBackgroundToggleResult};
    border-bottom: 5px solid ${(props) => props.theme.keyShadowToggleResult};
    grid-area: 5 / 3 / 5 / 5;
  }
`;

/************** COMPONENT **************/

const Keyboard = () => {
  const { dispatch } = useGlobalContext();

  const handleKeyEvent = (e) => {
    e.preventDefault();
    if (e.key === "Enter" || e.key === "=") {
      dispatch({ type: "CALCULATE", payload: "=" });
    } else if (e.key === "+" || e.key === "-" || e.key === "/") {
      dispatch({ type: "CALCULATE", payload: e.key });
    } else if (e.key === "*") {
      dispatch({ type: "CALCULATE", payload: "x" });
    } else if (e.key === ",") {
      dispatch({ type: "TYPE", payload: "." });
    } else if (e.key === "Backspace") {
      dispatch({ type: "DELETE", payload: "DEL" });
    } else if (e.key === "c" || e.key === "Escape") {
      dispatch({ type: "RESET", payload: "RESET" });
    } else {
      dispatch({ type: "TYPE", payload: e.key });
    }
  };

  useEffect(() => {
    window.addEventListener("keyup", handleKeyEvent);
    return () => {
      window.removeEventListener("keyup", handleKeyEvent);
    };
  }, []);

  return (
    <Style>
      {data.map((key) => (
        <Key key={key.value} {...key} />
      ))}
    </Style>
  );
};

export default Keyboard;
