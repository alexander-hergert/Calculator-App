import {
  useContext,
  createContext,
  useState,
  useReducer,
  useEffect,
} from "react";
import reducer from "./reducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialState = {
    inputNumber: "0",
    result: "0",
    type: null,
    selectedOperator: null,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [theme, setTheme] = useState("theme-1");
  const [themeColors, setThemeColors] = useState({});

  //SET THEME
  useEffect(() => {
    console.log(`theme switched to ${theme}`);
    if (theme === "theme-1") {
      setThemeColors({
        mainBackground: "hsl(222, 26%, 31%)",
        toggleKeypadBackground: "hsl(223, 31%, 20%)",
        screenBackground: "hsl(224, 36%, 15%)",
        keyBackgroundReset: "hsl(225, 21%, 49%)",
        keyShadowReset: "hsl(224, 28%, 35%)",
        keyBackgroundToggleResult: "hsl(6, 63%, 50%)",
        keyShadowToggleResult: "hsl(6, 70%, 34%)",
        keyBackground: "hsl(30, 25%, 89%)",
        keyShadow: "hsl(28, 16%, 65%)",
        keyText: "hsl(221, 14%, 31%)",
        outputText: "hsl(0, 0%, 100%)",
      });
    } else if (theme === "theme-2") {
      setThemeColors({
        mainBackground: "hsl(0, 0%, 90%)",
        toggleKeypadBackground: "hsl(0, 5%, 81%)",
        screenBackground: "hsl(0, 0%, 93%)",
        keyBackgroundReset: "hsl(185, 42%, 37%)",
        keyShadowReset: "hsl(185, 58%, 25%)",
        keyBackgroundToggleResult: "hsl(25, 98%, 40%)",
        keyShadowToggleResult: "hsl(25, 99%, 27%)",
        keyBackground: "hsl(45, 7%, 89%)",
        keyShadow: "hsl(35, 11%, 61%)",
        keyText: "hsl(60, 10%, 19%)",
        outputText: "hsl(60, 10%, 19%)",
      });
    } else if (theme === "theme-3") {
      setThemeColors({
        mainBackground: "hsl(268, 75%, 9%)",
        toggleKeypadBackground: "hsl(268, 71%, 12%)",
        screenBackground: "hsl(281, 89%, 26%)",
        keyBackgroundReset: "hsl(285, 91%, 52%)",
        keyShadowReset: "hsl(176, 100%, 44%)",
        keyBackgroundToggleResult: "hsl(177, 92%, 70%)",
        keyShadowToggleResult: "hsl(268, 47%, 21%)",
        keyBackground: "hsl(290, 70%, 36%)",
        keyShadow: "hsl(35, 11%, 61%)",
        keyText: "hsl(52, 100%, 62%)",
        outputText: "hsl(52, 100%, 62%)",
      });
    }
  }, [theme]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        state,
        dispatch,
        themeColors,
        setThemeColors,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
