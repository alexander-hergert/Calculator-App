import React, { useEffect } from "react";
import { ThemeProvider, styled } from "styled-components";
import Header from "./components/Header";
import Output from "./components/Output";
import Keyboard from "./components/Keyboard";
import { useGlobalContext } from "./context";
import { loadDataFromLocalStorage } from "./utility";

/**************** STYLES *******************/

const Main = styled.main`
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.outputText};
  background-color: ${(props) => props.theme.mainBackground};
  padding: 6rem;

  @media screen and (max-width: 400px) {
    padding: 0.5rem;
  }
`;

/**************** COMPONENTS *****************/

function App() {
  const { themeColors, setTheme } = useGlobalContext();

  //onload pick prefered theme or pick first if not prefered and then localStorage
  useEffect(() => {
    //check for stored value
    const storedTheme = loadDataFromLocalStorage("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "theme-1") {
        document.querySelector(
          'input[type="radio"]:first-child'
        ).checked = true;
        document.querySelector("#result").style.color = "white";
      } else if (storedTheme === "theme-2") {
        document.querySelector(
          'input[type="radio"]:nth-child(2)'
        ).checked = true;
        document.querySelector("#result").style.color = "white";
      } else if (storedTheme === "theme-3") {
        document.querySelector('input[type="radio"]:last-child').checked = true;
        document.querySelector("#result").style.color = "black";
      }
      //if nothing stored check predefined theme
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("theme-3");
      document.querySelector('input[type="radio"]:last-child').checked = true;
      document.querySelector("#result").style.color = "black";
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setTheme("theme-2");
      document.querySelector('input[type="radio"]:nth-child(2)').checked = true;
      document.querySelector("#result").style.color = "white";
    } else {
      setTheme("theme-1");
      document.querySelector('input[type="radio"]:first-child').checked = true;
      document.querySelector("#result").style.color = "white";
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={themeColors}>
        <Main>
          <Header />
          <Output />
          <Keyboard />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default App;
