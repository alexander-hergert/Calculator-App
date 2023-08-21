export const reducer = (state, action) => {
  switch (action.type) {
    case "CONCAT":
      return action.payload;
    case "ADD":
      return {
        ...state,
      };
    case "SUB":
      return {
        ...state,
      };
    case "MULTIPLY":
      return {
        ...state,
      };
    case "DIVIDE":
      return {
        ...state,
      };
    default:
      throw new Error("Unsupported action type");
  }
};

export default reducer;
