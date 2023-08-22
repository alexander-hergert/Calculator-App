import { useContext, createContext, useState, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    inputNumber: "",
    result: 0,
    type: null,
    selectedOperator: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState(1);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
