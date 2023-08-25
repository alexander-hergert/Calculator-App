import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { saveDataToLocalStorage } from "../utility";

/************** STYLES **************/

const Style = styled.div`
  display: flex;
  align-items: end;
  gap: 1rem;

  h2 {
    font-size: 1rem;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 3px;
  }

  .vertical {
    display: flex;
    flex-direction: column;
  }

  .horizontal {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    padding: 0 1rem;
  }

  input[type="radio"] {
    width: 1.25rem;
    height: 1.25rem;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.toggleKeypadBackground};
  }

  input[type="radio"]::before {
    content: "";
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${(props) => props.theme.toggleKeypadBackground};
    margin-bottom: 10px;
  }

  input[type="radio"]:checked::before {
    content: "";
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.keyBackgroundToggleResult};
    margin-bottom: 10px;
  }

  input[type="radio"]:hover::before {
    content: "";
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.activeResultToggleKey};
    margin-bottom: 10px;
  }

  .theme-switcher-background {
    background-color: ${(props) => props.theme.toggleKeypadBackground};
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 20px;
  }
`;

/************** COMPONENT **************/

const Theme = () => {
  const { setTheme } = useGlobalContext();
  const handleOnChange = (e) => {
    setTheme(e.target.value);
    saveDataToLocalStorage("theme", e.target.value);
  };

  return (
    <Style>
      <h2>Theme</h2>
      <div className="vertical">
        <div className="horizontal">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className="theme-switcher-background">
          <input
            type="radio"
            name="group1"
            id="radio1"
            value="theme-1"
            onChange={handleOnChange}
          />
          <input
            type="radio"
            name="group1"
            id="radio2"
            value="theme-2"
            onChange={handleOnChange}
          />
          <input
            type="radio"
            name="group1"
            id="radio3"
            value="theme-3"
            onChange={handleOnChange}
          />
        </div>
      </div>
    </Style>
  );
};

export default Theme;
