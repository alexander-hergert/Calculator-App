export const reducer = (state, action) => {
  switch (action.type) {
    case "CONCAT":
      const newConcatState = {
        inputNumber: state.inputNumber + action.payload,
        result: state.result,
        type: "CONCAT",
        selectedOperator: state.selectedOperator,
      };
      //Validation logic
      //Check if commas appear more than once in the inputNumber, if so then we return unchanged state
      const dotCount = (newConcatState.inputNumber.match(/\./g) || []).length; //using regex
      if (dotCount > 1) {
        return { ...state };
      }
      return newConcatState;

    case "CALCULATE":
      const value = action.payload;
      let newState = { ...state };
      const selectedOperator = state.selectedOperator;

      //Operation execution
      if (selectedOperator === "+") {
        newState = {
          inputNumber: state.inputNumber,
          result: parseFloat(state.result) + parseFloat(state.inputNumber || 0),
          type: "OPERATE",
        };
      } else if (selectedOperator === "-") {
        newState = {
          inputNumber: state.inputNumber,
          result: parseFloat(state.result) - parseFloat(state.inputNumber || 0),
          type: "OPERATE",
        };
      } else if (selectedOperator === "x") {
        newState = {
          inputNumber: state.inputNumber,
          result: parseFloat(state.result) * parseFloat(state.inputNumber || 0),
          type: "OPERATE",
        };
      } else if (selectedOperator === "/") {
        newState = {
          inputNumber: state.inputNumber,
          result: parseFloat(state.result) / parseFloat(state.inputNumber || 0),
          type: "OPERATE",
        };
      }

      //On the first run or result or reset
      if (selectedOperator === null) {
        newState.result = newState.inputNumber;
        newState.type = "OPERATE";
      }

      newState.selectedOperator = value; //previous value
      newState.inputNumber = "";
      return newState;

    case "DELETE":
      console.log("delete");
      return {
        ...state,
      };
    case "RESULT":
      console.log("result");
      return {
        ...state,
      };
    case "RESET":
      console.log("reset");
      return {
        ...state,
      };
    default:
      throw new Error("Unsupported action type");
  }
};

export default reducer;

//alternative is loop throught the inputNumber and count the commas
// let count = 0;
// for (let i = 0; i < newConcatState.inputNumber.length; i++) {
//   if (newConcatState.inputNumber[i] === ".") {
//     count++;
//     if (count > 1) {
//       return { ...state };
//     }
//   }
// }
