export const reducer = (state, action) => {
  if (action.type === "CONCAT") {
    let input;
    if (state.inputNumber === "0") {
      input = "";
    } else {
      input = state.inputNumber;
    }

    const newState = {
      inputNumber: input + action.payload,
      result: state.result,
      type: "INPUT",
      selectedOperator: state.selectedOperator,
    };
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
        result: parseFloat(state.result) + parseFloat(state.inputNumber || 0),
        type: "RESULT",
      };
    } else if (selectedOperator === "-") {
      newState = {
        ...state,
        inputNumber: state.inputNumber,
        result: parseFloat(state.result) - parseFloat(state.inputNumber || 0),
        type: "RESULT",
      };
    } else if (selectedOperator === "x") {
      newState = {
        ...state,
        inputNumber: state.inputNumber,
        result: parseFloat(state.result) * parseFloat(state.inputNumber || 1),
        type: "RESULT",
      };
    } else if (selectedOperator === "/") {
      newState = {
        ...state,
        inputNumber: state.inputNumber,
        result: parseFloat(state.result) / parseFloat(state.inputNumber || 1),
        type: "RESULT",
      };
    }

    //On the first run or result or reset
    if (selectedOperator === null) {
      newState.result = newState.inputNumber;
      newState.type = "RESULT";
    }

    newState.selectedOperator = value; //previous value
    newState.inputNumber = "";

    if (value === "=") {
      newState = {
        ...newState,
        inputNumber: "0",
        selectedOperator: null,
      };
    }

    return newState;
  } else if (action.type === "DELETE") {
    if (state.inputNumber.length === 1) {
      return { ...state, inputNumber: "0", result: state.result };
    }
    const newState = {
      inputNumber: state.inputNumber.substring(0, state.inputNumber.length - 1),
      result: state.result,
      type: "INPUT",
      selectedOperator: state.selectedOperator,
    };

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
