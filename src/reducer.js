import {
  addThousandSeperator as aTS,
  filterThousandSeparator as fTS,
} from "./utility";

export const reducer = (state, action) => {
  if (action.type === "TYPE") {
    let input = "";
    //Reset input to avoid the 0 at beginning
    if (state.inputNumber === "0") {
      input = "";
    } else {
      //remove separation marks "," for thousands
      input = fTS(state.inputNumber);
    }

    //max input length
    if (state.inputNumber.length === 19) {
      return { ...state };
    }

    const newState = {
      inputNumber: input + action.payload,
      result: state.result,
      type: "INPUT",
      selectedOperator: state.selectedOperator,
    };
    //convert number to string with separators

    newState.inputNumber = aTS(
      parseFloat(newState.inputNumber),
      action.payload,
      newState.inputNumber
    );

    //Validation logic
    //Check if commas appear more than once in the inputNumber, if so then we return unchanged state
    const dotCount = (newState.inputNumber.match(/\./g) || []).length; //using regex
    if (dotCount > 1) {
      return { ...state };
    }

    return newState;
  } else if (action.type === "CALCULATE") {
    const value = action.payload;
    let newState = { ...state };
    const selectedOperator = state.selectedOperator;

    //Operation execution
    if (selectedOperator === "+") {
      newState = {
        ...state,
        inputNumber: state.inputNumber,
        result:
          parseFloat(fTS(state.result)) +
          parseFloat(fTS(state.inputNumber) || 0),
        type: "RESULT",
      };
    } else if (selectedOperator === "-") {
      newState = {
        ...state,
        inputNumber: state.inputNumber,
        result:
          parseFloat(fTS(state.result)) -
          parseFloat(fTS(state.inputNumber) || 0),
        type: "RESULT",
      };
    } else if (selectedOperator === "x") {
      newState = {
        ...state,
        inputNumber: state.inputNumber,
        result:
          parseFloat(fTS(state.result)) *
          parseFloat(fTS(state.inputNumber) || 1),
        type: "RESULT",
      };
    } else if (selectedOperator === "/") {
      newState = {
        ...state,
        inputNumber: state.inputNumber,
        result:
          parseFloat(fTS(state.result)) /
          parseFloat(fTS(state.inputNumber) || 1),
        type: "RESULT",
      };
    }

    //On the first run or result or reset
    if (selectedOperator === null) {
      newState.result = aTS(newState.inputNumber);
      newState.type = "RESULT";
    }

    if (value !== "=") {
      newState.selectedOperator = value; //previous value
      newState.inputNumber = "";
      newState.result = aTS(newState.result);
    }

    if (value === "=") {
      newState.inputNumber = "";
      newState.result = aTS(newState.result);
    }

    return newState;
  } else if (action.type === "DELETE") {
    if (state.inputNumber.length === 1) {
      return { ...state, inputNumber: "0", result: state.result };
    }
    const newState = {
      inputNumber: fTS(
        state.inputNumber.substring(0, state.inputNumber.length - 1)
      ),
      result: state.result,
      type: "INPUT",
      selectedOperator: state.selectedOperator,
    };
    newState.inputNumber = aTS(parseFloat(newState.inputNumber));

    if (newState.inputNumber === "") {
      return { ...newState, type: "RESULT" };
    }

    return newState;
  } else if (action.type === "RESET") {
    return {
      inputNumber: "0",
      result: "0",
      type: null,
      selectedOperator: null,
    };
  } else {
    throw new Error("Unsupported action type");
  }
};

export default reducer;
