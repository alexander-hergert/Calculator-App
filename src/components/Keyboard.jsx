import React, { useEffect } from "react";
import Key from "./Key";
import styled from "styled-components";
import { data } from "../data";
import { useGlobalContext } from "../context";

/************** STYLES **************/

const Style = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

/************** COMPONENT **************/

const Keyboard = () => {
  const { dispatch } = useGlobalContext();

  const handleKeyEvent = (e) => {
    e.preventDefault();
    if (e.key === "Enter" || e.key === "=") {
      dispatch({ type: "CALCULATE", payload: "=" });
    } else if (
      e.key === "+" ||
      e.key === "-" ||
      e.key === "*" ||
      e.key === "/"
    ) {
      dispatch({ type: "CALCULATE", payload: e.key });
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
