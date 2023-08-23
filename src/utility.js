export function filterThousandSeparator(input) {
  let formattedInput = input;

  while (formattedInput.includes(",")) {
    formattedInput = formattedInput.replace(",", "");
  }

  return formattedInput;
}

export function addThousandSeperator(input, value, lastInput) {
  if (!input && input !== 0) {
    input = "0.";
  } else if (value === ".") {
    input = input + ".";
  } else if (value === "0" && lastInput.includes(".")) {
    input = lastInput;
  }
  const formattedInput = input.toLocaleString();
  return formattedInput;
}
