import React from "react";
import { styled } from "styled-components";
import Header from "./components/Header";
import Output from "./components/Output";
import Keyboard from "./components/Keyboard";

/**************** STYLES *******************/

const Main = styled.main``;

/**************** COMPONENTS *****************/

function App() {
  return (
    <>
      <Header />
      <Main>
        <Output />
        <Keyboard />
      </Main>
    </>
  );
}

export default App;
