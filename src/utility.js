//to avoid cutoffs and dataloss
export function filterThousandSeparator(input) {
  let formattedInput = input;

  while (formattedInput.includes(",")) {
    formattedInput = formattedInput.replace(",", "");
  }

  return formattedInput;
}

//This function takes mainly a number wich is passed from a converted input string to format it to localeString
export function addThousandSeperator(input, value, lastInput) {
  //handle special cases
  if (!input && input !== 0) {
    input = "0.";
  } else if (value === ".") {
    input = input + ".";
  } else if (value === "0" && lastInput.includes(".")) {
    input = lastInput;
  }

  //check if the input is too big or too small and convert into number exp
  const maxNumber = 999999999999999;
  const minNumber = -999999999999999;
  if (input > maxNumber || input < minNumber) {
    const expInput = input.toExponential(3);
    return expInput;
  }

  //check if comma inside

  //fix rounding issue on the last digits
  if (lastInput?.includes(".")) {
    //required to check if we are the the last digit after comma
    const lastIndex = lastInput.length - 1;
    const indexOfComma = lastInput.indexOf(".");
    const digitsAftercomma = lastIndex - indexOfComma;

    if (digitsAftercomma > 9) {
      //realy return if after the last digit user eneter '.' to avoid NaN issue
      if (value === ".") {
        const cutLastInput = lastInput.substring(0, lastInput.length - 1);
        const formattedInput = parseFloat(cutLastInput).toLocaleString(
          undefined,
          {
            maximumFractionDigits: 9,
          }
        );
        return formattedInput;
      }
      //convert numbers so that only last digit will be floored to avoid rounding up on default
      const flooredInput =
        Math.floor(input * Math.pow(10, 9)) / Math.pow(10, 9);
      const formattedInput = flooredInput.toLocaleString(undefined, {
        maximumFractionDigits: 9,
      });
      return formattedInput;
    }
  }

  const formattedInput = input.toLocaleString(undefined, {
    maximumFractionDigits: 9,
  });
  return formattedInput;
}
