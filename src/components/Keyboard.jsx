import React, { useState, useEffect } from "react";
import Key from "./Key";
import styled from "styled-components";
import { data } from "../data";
import { useGlobalContext } from "../context";

/************** STYLES **************/

const Style = styled.section`
  transition: all 0.5s;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  padding: 1.5rem;
  gap: 1rem;
  background-color: ${(props) => props.theme.toggleKeypadBackground};
  border-radius: 10px;
  width: 30rem;

  @media screen and (max-width: 400px) {
    width: 22rem;
  }

  //style buttons here

  button:active,
  button.active {
    transform: translateY(4px);
    border-bottom: 2px solid ${(props) => props.theme.keyShadow};
    background-color: ${(props) => props.theme.activeKey};
  }

  //keyboard

  #delete,
  #reset,
  #result {
    color: white;
  }

  #delete {
    transition: background-color 0.5s;
    background-color: ${(props) => props.theme.keyBackgroundReset};
    border-bottom: 5px solid ${(props) => props.theme.keyShadowReset};
  }
  #delete:hover,
  #reset:hover {
    background-color: ${(props) => props.theme.activeResetKey};
  }

  #reset {
    transition: background-color 0.5s;
    background-color: ${(props) => props.theme.keyBackgroundReset};
    border-bottom: 5px solid ${(props) => props.theme.keyShadowReset};
    grid-area: 5 / 1 / 5 / 3;
  }

  #delete:active,
  #reset:active,
  #delete.active,
  #reset.active {
    border-bottom: 2px solid ${(props) => props.theme.keyShadowReset};
    background-color: ${(props) => props.theme.activeResetKey};
  }

  #result {
    transition: background-color 0.5s;
    background-color: ${(props) => props.theme.keyBackgroundToggleResult};
    border-bottom: 5px solid ${(props) => props.theme.keyShadowToggleResult};
    grid-area: 5 / 3 / 5 / 5;
  }
  #result:hover {
    background-color: ${(props) => props.theme.activeResultToggleKey};
  }

  #result:active,
  #result.active {
    border-bottom: 2px solid ${(props) => props.theme.keyShadowToggleResult};
    background-color: ${(props) => props.theme.activeResultToggleKey};
  }
`;

/************** COMPONENT **************/

const Keyboard = () => {
  const { dispatch } = useGlobalContext();
  const [activeButton, setActiveButton] = useState(null);

  const handleKeyEvent = (e) => {
    e.preventDefault();
    if (e.key === "Enter" || e.key === "=") {
      setActiveButton("=");
      dispatch({ type: "CALCULATE", payload: "=" });
    } else if (e.key === "+" || e.key === "-" || e.key === "/") {
      setActiveButton(e.key);
      dispatch({ type: "CALCULATE", payload: e.key });
    } else if (e.key === "*") {
      setActiveButton("x");
      dispatch({ type: "CALCULATE", payload: "x" });
    } else if (e.key === ",") {
      setActiveButton(".");
      dispatch({ type: "TYPE", payload: "." });
    } else if (e.key === "Backspace") {
      setActiveButton("DEL");
      dispatch({ type: "DELETE", payload: "DEL" });
    } else if (e.key === "c" || e.key === "Escape") {
      setActiveButton("RESET");
      dispatch({ type: "RESET", payload: "RESET" });
    } else {
      setActiveButton(e.key);
      dispatch({ type: "TYPE", payload: e.key });
    }

    setTimeout(() => {
      setActiveButton(null);
    }, 100);
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
        <Key
          key={key.value}
          {...key}
          active={activeButton === key.value ? "active" : ""}
        />
      ))}
    </Style>
  );
};

export default Keyboard;
