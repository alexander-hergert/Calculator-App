import React, { useEffect } from "react";
import { ThemeProvider, styled } from "styled-components";
import Header from "./components/Header";
import Output from "./components/Output";
import Keyboard from "./components/Keyboard";
import { useGlobalContext } from "./context";
import { loadDataFromLocalStorage } from "./utility";

/**************** STYLES *******************/

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.outputText};
  background-color: ${(props) => props.theme.mainBackground};
  padding: 6rem;
`;

/**************** COMPONENTS *****************/

function App() {
  const { themeColors, setTheme } = useGlobalContext();

  //onload pick prefered theme or pick first if not prefered and then localStorage
  useEffect(() => {
    const storedTheme = loadDataFromLocalStorage("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === "theme-1") {
        document.querySelector(
          'input[type="radio"]:first-child'
        ).checked = true;
      } else if (storedTheme === "theme-2") {
        document.querySelector(
          'input[type="radio"]:nth-child(2)'
        ).checked = true;
      } else if (storedTheme === "theme-3") {
        document.querySelector('input[type="radio"]:last-child').checked = true;
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("theme-3");
      document.querySelector('input[type="radio"]:last-child').checked = true;
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      setTheme("theme-2");
      document.querySelector('input[type="radio"]:nth-child(2)').checked = true;
    } else {
      setTheme("theme-1");
      document.querySelector('input[type="radio"]:first-child').checked = true;
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
