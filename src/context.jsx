import { useContext, createContext, useState, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = { inputNumber: 0, result: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState(1);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
