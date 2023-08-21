export const reducer = (state, action) => {
  switch (action.type) {
    case "CONCAT":
      const newState = {
        inputNumber: action.payload,
        result: state.result,
        type: "NUMBER",
      };
      return newState;
    case "ADD":
      console.log("add");
      return {
        ...state,
      };
    case "SUB":
      console.log("sub");
      return {
        ...state,
      };
    case "MULTIPLY":
      console.log("multiply");
      return {
        ...state,
      };
    case "DIVIDE":
      console.log("divide");
      return {
        ...state,
      };
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
