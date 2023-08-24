import React from "react";
import { ThemeProvider, styled } from "styled-components";
import Header from "./components/Header";
import Output from "./components/Output";
import Keyboard from "./components/Keyboard";
import { useGlobalContext } from "./context";

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
  const { themeColors } = useGlobalContext();
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
